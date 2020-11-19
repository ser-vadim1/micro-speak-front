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

const PartOfMessage = ({socket}) => {
  //** MAIN VARIABLES

  const { ID_SinglChat, QuestIdUser } = useContext(
    SinglChatContext
  );
  const { OwneruserId, token } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [upLoadAnyFiles, SetUpLoadAnyFiles] = useState([]);
  const [fileApiBrowser, setFileApiBrowser] = useState([])
  const [isloadingFiles,setIsloadingFiles] = useState(false)
  const [isOpenSliderChoosenFiles, setSliderChoosenFiles] = useState(false)
  const MixRegex = /^image\/.+|^audio\/.+/ 

  //** FUNCTIONAL
// useEffect(()=>{
//   if(socket){
//     socket.emit('nitifyMessage', { OwneruserId, QuestIdUser, message})
//   }
// },[socket, OwneruserId, QuestIdUser])
 
  useEffect(() => {
    if(socket){
      socket.on("message", (message) => {
        setMessages((messages) => [...messages, message]);
        
      });

      // socket.on("sendNotification", (data)=>{
      //   console.log("data at notifyMessage",data);
      // })

      socket.on("historyMassages", (historyMassage) => {
        setMessages(Array.from(new Set([...historyMassage])));
      });
    }
   
      

    
return () => {
  // socket.off('message')
  // socket.off('historyMassages')
}
// ! Сделать Willmount|
  
  }, [socket]);




  const sendMessage = (e) => {
    e.preventDefault();
  if ( (message && !isOpenSliderChoosenFiles )|| ( fileApiBrowser && isloadingFiles )) {
    socket.emit(
      "sendMessage",
      { ID_SinglChat, message, OwneruserId, QuestIdUser, fileApiBrowser },
      () => {
        setMessage("");
        setFileApiBrowser([])
        setSliderChoosenFiles(false)
        setIsloadingFiles(false)
      }
    );
 
  }

  };

  const FetchUploadAnyFiles = async (upLoadAnyFiles) => {
    let formData = new FormData();
    if(upLoadAnyFiles.length >6 ){
      console.log('a lot of files');
      return
    }
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
    if(files.length > 6){
      console.log('a lot of files');
      return
    }
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
                  <ImgUploaded isLoadFile={isloadingFiles} link = {file.src}/> : 
                  file.type.startsWith("audio/") ?
                  <Audiouploaded isLoadFile={isloadingFiles} link = {file.src}/> : ""
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

// useEffect(()=>{
//   if(socket){
//     socket.emit('nitifyMessage', { OwneruserId, QuestIdUser})

//     console.log('sss');

//     socket.on("sendNotifyMessage", (data)=>{
//       console.log('data', data);
//     })
//   }


// },[OwneruserId, QuestIdUser, socket])