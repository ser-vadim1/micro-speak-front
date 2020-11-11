import React, { useState, useEffect, useRef } from "react";
import {
  ContainerMessage,
  BoxOfTypeMessage,
  FormTypeMessage,
  TypeMessage,
  ClipIcon,
  WrapperFormAddAnyFile,
  Label,
  InputFile,
  SliderOfChoosenFiles,
  BoxOfChoosenFiles,
  ChoosenFiles,
  P_suportFormat,
} from "./styledPartOfMassage";
import { DOMAIN_NAME, UPLOADANYFILES } from "../../../Helper/api";
import { useContext } from "react";
import { SinglChatContext } from "../../Context/SinglChatContext/SinglChatContext";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Messages from "../../Messages/Message/messages/messages";
import AudioComponent from "../../AudioUpload/AudioUpload"

const PartOfMessage = () => {
  //** MAIN VARIABLES

  const { ID_SinglChat, QuestIdUser, socket } = useContext(
    SinglChatContext
  );
  const { OwneruserId, token, isAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [upLoadAnyFiles, SetUpLoadAnyFiles] = useState([]);
  const [isOpenSliderChoosenFiles, setSliderChoosenFiles] = useState(false)
  const [prevId_User, setPrevID_Chat] = useState([])
  const [prevId_Chat, setPrevChat] = useState([])
  const regexImg = /^image\/.+/
  const regexAudio = /^audio\/.+/
  const MixRegex = /^image\/.+|^audio\/.+/ 

  //** FUNCTIONAL
  useEffect(() => {

    if (ID_SinglChat) {
      socket.emit("join", { ID_SinglChat, QuestIdUser, OwneruserId });
      setPrevID_Chat((prevId_User)=> [...prevId_User, QuestIdUser ])
      setPrevChat((prevId_Chat)=>[...prevId_Chat, ID_SinglChat])
    if(prevId_Chat.length >=1) {
      let shiftedPrevIdUser = prevId_User.shift()
      let shiftedprevIdChat = prevId_Chat.shift()
      socket.emit('leave', {shiftedPrevIdUser, shiftedprevIdChat})
      }
    }
    return () => {
    socket.off('join') 
    socket.off('leave')
  }

  }, [ID_SinglChat, OwneruserId, isAuth]);
 
  useEffect(() => {
    if(ID_SinglChat){
      socket.on("message", (message) => {
        setMessages((messages) => [...messages, message]);
      });
      socket.on("historyMassages", (historyMassage) => {
        setMessages(Array.from(new Set([...historyMassage])));
      });
    }
    

return () => {
  socket.off('message')
  socket.off('historyMassages')
}
// ! Сделать Willmount|
  
  }, [ID_SinglChat]);

  const sendMessage = (e) => {
    e.preventDefault();
  if (message  || upLoadAnyFiles) {
    socket.emit(
      "sendMessage",
      { ID_SinglChat, message, OwneruserId, QuestIdUser, upLoadAnyFiles },
      () => {
        setMessage("");
        SetUpLoadAnyFiles([]);
        setSliderChoosenFiles(false)
      }
    );
  }
   
  };

  const FetchUploadAnyFiles = async (upLoadAnyFiles) => {
    let formData = new FormData();
    for (let i = 0; i < upLoadAnyFiles.length; i++) {

      if(!MixRegex.test(upLoadAnyFiles[i].type)){
        console.log('wrong file');
        return
      }
      
      formData.append("uploadedAnyFiles", upLoadAnyFiles[i]);
    }

    try {
      let res = await fetch(`${UPLOADANYFILES}`, {
        headers: {
          authorization: `${token}`,
        },
        method: "POST",
        body: formData,
      });
      let data = await res.json();
      console.log(data);
      setSliderChoosenFiles(true)
      SetUpLoadAnyFiles([...data.files]);
    } catch (error) {
      console.log(error);
    }
  };
  const OnUploadAnyFiles = (e) => {
    if (e.target.files) {
      let upLoadAnyFiles = Array.from(e.target.files)
      FetchUploadAnyFiles(upLoadAnyFiles);
    }
  };
  //** RENDER

  return (
    <>

      <ContainerMessage >
        <BoxOfTypeMessage>
          <Messages messages={messages} ID_SinglChat ={ID_SinglChat} isOpenSliderChoosenFiles = {isOpenSliderChoosenFiles}/>
          <FormTypeMessage>
            <TypeMessage
              placeholder="Type your message"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              onKeyPress={(e) => (e.key === "Enter" && ID_SinglChat ? sendMessage(e) : null)}
            >
            </TypeMessage>

        <SliderOfChoosenFiles isOpenSliderChoosenFiles = {isOpenSliderChoosenFiles}>
          {upLoadAnyFiles.map((file, index)=>{
            // !Проработать ключи для компонента
              return (
              <BoxOfChoosenFiles key={index}>
                {
                regexAudio.test(file.typeFile)   ? <AudioComponent link = {file.link}/> : 
                regexImg.test(file.typeFile ) ? <ChoosenFiles src = {`${file.link}`}/> : null
              }
              </BoxOfChoosenFiles>)
          })}
        </SliderOfChoosenFiles>
          </FormTypeMessage>
          <WrapperFormAddAnyFile
            encType="multipart/form-data"
            onChange={OnUploadAnyFiles}
          >
            <Label htmlFor="uploadedAnyFiles" isOpenSliderChoosenFiles = {isOpenSliderChoosenFiles}>
              <ClipIcon />
            </Label>
            <div>
              <InputFile id="uploadedAnyFiles" type="file" multiple></InputFile>
            </div>
          </WrapperFormAddAnyFile>
        </BoxOfTypeMessage>
      </ContainerMessage>
    </>
  );
};
export default PartOfMessage;
