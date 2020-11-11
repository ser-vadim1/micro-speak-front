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
  },
  order,
}) => {
  //** MAIN VARIABLES
  const [isSentByCurrentUser, setisSentByCurrentUser] = useState("");
  const { OwneruserId } = useContext(AuthContext);
  const[isOpenModal, setIsOpenModal] = useState(false)
  const [fileForModal, setFileForModal] = useState("")
  const [size, setSize] = useState({width: "", height: ""})
  // ! Сделать регул.вып уневерсальнее (не дублировать)
  const regexImg = /^image\/.+/
  const regexAudio = /^audio\/.+/

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
    let newLinkFile = linkFile.replace("resized_", "")
    console.log(newLinkFile);
    setFileForModal(newLinkFile)
      // if( e.target.naturalWidth >= 900){
      //   console.log('xx');
      //   setSize({width: 900, height: 800})
      // }else {
      //   setSize({width: e.target.naturalWidth, height: e.target.naturalWidth})

      // }
  }
    
  
    
  const hendlerCloseModal = useCallback(
    () => {
      setIsOpenModal(!isOpenModal)
      setFileForModal("")
    },
    [isOpenModal, fileForModal],
  );

const lol = ()=>{
  console.log('x');
}
  return (
    <>
      {isSentByCurrentUser ? (
        <FlexBoxOfMessages start={1} order={-order}>
          <MessageBlue CountFiles={upLoadAnyFiles.length >= 4 ? 1 : 0}>
            <MessageContent>{content}</MessageContent>
            <MessageTimestampLeft>SMS {timeCreateAt}</MessageTimestampLeft>
            <NickNameBlue>{sender}</NickNameBlue>
            <WrapperAvatarMessageBlue>
              <AvatarMassageBlue
                src={`${DOMAIN_NAME}/uploadedAvatar/${avatarFile}`}
              />
            </WrapperAvatarMessageBlue>
            <BoxOfUploadedFiles>
              {upLoadAnyFiles
                ? upLoadAnyFiles.map((file, index) => {
                  if(regexAudio.test(file.typeFile)){
                    return (
                      <AudioTag controls  key = {index}>
                        <SourceTag src = {`${file.link}`} type="audio/mpeg"/>
                    </AudioTag>
                    )
                  }
                  else if(regexImg.test(file.typeFile)){
                    return (
                        <IMGAnyFileMassageBlue
                           key={index}
                          src={`${file.link}`}
                          onClick={(e)=> hendlerOpenModal(file.link, e)}
                      ></IMGAnyFileMassageBlue>
                 
                    );
                  }

                  })
                 
                : ""}
            </BoxOfUploadedFiles>
          </MessageBlue>
          <ModalWindow isOpenModal={isOpenModal} onClick ={hendlerCloseModal}>
            <BoxofContentModal width = {size.width} height = {size.height}>
              <ContentImgModal onLoad ={lol} src = {`${fileForModal}`}></ContentImgModal>
            </BoxofContentModal>
          </ModalWindow>
        </FlexBoxOfMessages>
      ) : isSentByCurrentUser === false ? (
        <FlexBoxOfMessages order={-order}>
          <MessageOrange CountFiles={upLoadAnyFiles.length >= 4 ? 1 : 0}>
            <MessageContent>{content}</MessageContent>
            <MessageTimestampRight>SMS {timeCreateAt}</MessageTimestampRight>
            <NickNameOrange>{sender}</NickNameOrange>
            <WrapperAvatarMessageOrange>
              <AvatarMassageOrange
                src={`${DOMAIN_NAME}/uploadedAvatar/${avatarFile}`}
              />
            </WrapperAvatarMessageOrange>
            <BoxOfUploadedFiles>
              {upLoadAnyFiles
                ? upLoadAnyFiles.map((file, index) => {
                  if(regexAudio.test(file.typeFile)){
                    return (
                    <AudioTag controls  key = {index}>
                      <SourceTag src = {`${file.link}`} type="audio/mpeg"/>
                  </AudioTag>
                    )
                  }
                  else if(regexImg.test(file.typeFile)){
                    return (
                        <IMGAnyFileMassageBlue
                           key = {index}
                            src={`${file.link}`}
                            onClick={(e)=> hendlerOpenModal(file.link, e)}
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
