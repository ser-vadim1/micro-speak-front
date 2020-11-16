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
} from "./styledPartOfMassage";
import { DOMAIN_NAME, UPLOADANYFILES } from "../../../Helper/api";
import { useContext } from "react";
import { SinglChatContext } from "../../Context/SinglChatContext/SinglChatContext";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Messages from "../../Messages/Message/messages/messages";
import Audiouploaded from "../../AudioUpload/AudioUpload"
import ImgUploaded from "../../ImgUploaded/imgUploaded"

const PartOfMessage = () => {
  //** MAIN VARIABLES
const imgRef = useRef(null)

  const { ID_SinglChat, QuestIdUser, socket } = useContext(
    SinglChatContext
  );
  const { OwneruserId, token, isAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSendMessage, setIsSendMesssage] = useState(false)
  const [upLoadAnyFiles, SetUpLoadAnyFiles] = useState([]);
  const [fileApiBrowser, setFileApiBrowser] = useState([])
  const [files, setFiles] = useState([])
  const [idMEssageDB, setIdMesssageDb] = useState("")
  const [isloadingFiles,setIsloadingFiles] = useState(false)
  const [isOpenSliderChoosenFiles, setSliderChoosenFiles] = useState(false)
  const [prevId_User, setPrevID_Chat] = useState([])
  const [prevId_Chat, setPrevChat] = useState([])
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
        setIdMesssageDb(message.id)
        console.log(message);
        setMessages((messages) => [...messages, message]);
      });
      socket.on("historyMassages", (historyMassage) => {
        console.log('historyMassage', historyMassage);
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
  if (message  || ( fileApiBrowser && isloadingFiles )) {
    socket.emit(
      "sendMessage",
      { ID_SinglChat, message, OwneruserId, QuestIdUser, upLoadAnyFiles, fileApiBrowser },
      () => {
        setMessage("");
        setFileApiBrowser([])
        setSliderChoosenFiles(false)
        setIsSendMesssage(true)
        setIsloadingFiles(false)
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
      console.log(res.body);

      const {body} = data 
      if(data){

      setFileApiBrowser([...data.files])
      setIsloadingFiles(true)

      }
      console.log('its DATA',data);
    } catch (error) {
      console.log('error at FetchUploadAnyFiles ',error);
    }
  };


  const OnUploadAnyFiles = (e) => {
    if (e.target.files) {
    let uploadfiles = []
    let files = e.target.files
      setSliderChoosenFiles(true)
      for (let i = 0; i < files.length; i++) {
        let src = URL.createObjectURL(files[i])
        uploadfiles.push({
          id:`f${(~~(Math.random()*1e8)).toString(16)}`,
          src: src,
          type: files[i].type
        })
        
      }
      SetUpLoadAnyFiles(uploadfiles)
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
              <BoxOfChoosenFiles key={file.id}>
                {
                  file.type.startsWith("image/") ? 
                  <ImgUploaded link = {file.src}/> : 
                  file.type.startsWith("audio/") ?
                  <Audiouploaded link = {file.src}/> : ""
                }
              </BoxOfChoosenFiles>)
          })}
        </SliderOfChoosenFiles>
          </FormTypeMessage>
          <WrapperFormAddAnyFile
            encType="multipart/form-data"
            onChange={(e)=>OnUploadAnyFiles(e)}
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
