// ! Дорабоать отправку сообщений как видео  аудио так и фото

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import {DOMAIN_NAME} from "../../../Helper/api"
import {
  MessageBlue,
  MessageOrange,
  NickNameBlue,
  NickNameOrange,
  MessageContent,
  MessageTimestampRight,
  MessageTimestampLeft,
  AvatarMassageBlue,
  WrapperAvatarMessageBlue,
  AvatarMassageOrange,
  WrapperAvatarMessageOrange,
  BoxOfUploadedFiles,
  FlexBoxOfMessages,
  ModalWindow,
  BoxofContentModal,
  ContentImgModal,
  IMGAnyFileMassageBlue,
  AudioTag,
  SourceTag,
} from "./styledMassage";

// 888888888888888888888888888888888888888888888888888888888

const Message = ({
  message: {
    sender,
    avatarFile,
    content,
    idSender,
    upLoadAnyFiles,
    timeCreateAt,
    fileApiBrowser,
  },
  order,
}) => {
  //** MAIN VARIABLES
  const [isSentByCurrentUser, setisSentByCurrentUser] = useState("");
  const { OwneruserId } = useContext(AuthContext);
  const[isOpenModal, setIsOpenModal] = useState(false)
  const [fileForModal, setFileForModal] = useState("")
  const [size, setSize] = useState({width: "", height: ""})
  const [AudioContain, setOnlyAudioContain] = useState(false)
  const [ImageContain, setOnlyImageContain] =useState(false)
  let Regexaudio = /^audio\/.+/
  let RegexImg = /^image\/.+/
  // ! Сделать регул.вып уневерсальнее (не дублировать)
 

//** FUNCTIONAL

  useEffect(() => {
    if (OwneruserId === idSender) {
      setisSentByCurrentUser(true);
    } else {
      setisSentByCurrentUser(false);
    }
  }, []);

  const hendlerOpenModal =  (linkFile, e) =>{
    setIsOpenModal(!isOpenModal)
    setFileForModal(linkFile)
      if( e.target.naturalWidth >= 900){
        setSize({width: 900, height: 800})
      }else {
        setSize({width: e.target.naturalWidth, height: e.target.naturalWidth})

      }
  }
    
  
    
  const hendlerCloseModal = useCallback(
    () => {
      setIsOpenModal(!isOpenModal)
      setFileForModal("")
    },
    [isOpenModal, fileForModal],
  );

  useEffect(()=>{
    let audio = fileApiBrowser.find((file)=> Regexaudio.test(file.type) ? file : "" )
    let image = fileApiBrowser.find((file)=> RegexImg.test(file.type) ? file : "" )
     
    if(audio && !image){
      setOnlyAudioContain(true)
      setOnlyImageContain(false)
    }else if(!audio && image){
      setOnlyImageContain(true)
      setOnlyAudioContain(false)
    }else if(audio && image){
      setOnlyImageContain(true)
      setOnlyAudioContain(true)
    }

    return ()=>{
      setOnlyAudioContain(false)
    }
  },[])

  return (
    <>
      {isSentByCurrentUser ? (
        <FlexBoxOfMessages start={1} order={-order}>
          <MessageBlue CountFiles = {fileApiBrowser.length >=4 ? 1 : 0} audioContain={AudioContain} ImageContain={ImageContain} >
            <MessageContent>{content}</MessageContent>
            <MessageTimestampLeft>SMS {timeCreateAt}</MessageTimestampLeft>
            <NickNameBlue>{sender}</NickNameBlue>
            <WrapperAvatarMessageBlue>
              <AvatarMassageBlue
                src={`${DOMAIN_NAME}/uploadedAvatar/${avatarFile}`}
              />
            </WrapperAvatarMessageBlue>
            <BoxOfUploadedFiles>
              {
              fileApiBrowser
                ? fileApiBrowser.map((file) => {
                  if(file.type.startsWith('audio/')){
                    return (
                      <AudioTag controls  key = {file.id}>
                        <SourceTag src = {file.src} type="audio/mpeg"/>
                    </AudioTag>
                    )
                  }
                  else if( file.type.startsWith("image/") ){
                    return (
                        <IMGAnyFileMassageBlue
                           key={file.id}
                          src={file.src}
                          onClick={(e)=> hendlerOpenModal(file.src, e)}
                      ></IMGAnyFileMassageBlue>
                 
                    );
                  }

                  })
                 
                : ""}
            </BoxOfUploadedFiles>
          </MessageBlue>
          <ModalWindow isOpenModal={isOpenModal} onClick ={hendlerCloseModal}>
            <BoxofContentModal width = {size.width} height = {size.height}>
              <ContentImgModal  src = {`${fileForModal}`}></ContentImgModal>
            </BoxofContentModal>
          </ModalWindow>
        </FlexBoxOfMessages>
      ) : isSentByCurrentUser === false ? (
        <FlexBoxOfMessages order={-order}>
          <MessageOrange CountFiles = {fileApiBrowser.length >=4 ? 1 : 0} audioContain={AudioContain} ImageContain={ImageContain} >
            <MessageContent>{content}</MessageContent>
            <MessageTimestampRight>SMS {timeCreateAt}</MessageTimestampRight>
            <NickNameOrange>{sender}</NickNameOrange>
            <WrapperAvatarMessageOrange>
              <AvatarMassageOrange
                src={`${DOMAIN_NAME}/uploadedAvatar/${avatarFile}`}
              />
            </WrapperAvatarMessageOrange>
            <BoxOfUploadedFiles>
              {fileApiBrowser
                ? fileApiBrowser.map((file, index) => {
                  if(file.type.startsWith('audio/')){
                    return (
                    <AudioTag controls  key = {file.id}>
                      <SourceTag src = {file.src} type="audio/mpeg"/>
                  </AudioTag>
                    )
                  }
                  else if( file.type.startsWith("image/") ){
                    return (
                        <IMGAnyFileMassageBlue
                           key = {file.id}
                            src={file.src}
                            onClick={(e)=> hendlerOpenModal(file.src, e)}
                      ></IMGAnyFileMassageBlue>
                 
                    );
                  }
                  })
                : ""}
            </BoxOfUploadedFiles>
          </MessageOrange>
          <ModalWindow isOpenModal={isOpenModal} onClick ={hendlerCloseModal}>
            <BoxofContentModal width = {size.width} height = {size.height} >
              <ContentImgModal src = {`${fileForModal}`}></ContentImgModal>
            </BoxofContentModal>
          </ModalWindow>
        </FlexBoxOfMessages>
      ) : isSentByCurrentUser === null ? (
        ""
      ) : (
        ""
      )}
    </>
  );
};

export default Message;
