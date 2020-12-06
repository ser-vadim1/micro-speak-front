import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { SinglChatContext } from "../../../Context/SinglChatContext/SinglChatContext";
import {DOMAIN_NAME} from "../../../../Helper/api"
import {
  WrapperAvatar,
  ContainerAvatar,
  AvatarImg,
  P_userName,
  DotsIcon,
  ContainerAdditionalPart,
} from "./styledAnotherUsers";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
const AnotherUsers = ({
  nick,
  avatarFile,
  QuestIdUser,
  addOptions,
  widthAvatar,
  ISOnlineUsers,
  isAllowHandler,
  socket,
}) => {
  //** MAIN VARIABLES
  const {Create_Singl_Chat} = useContext(SinglChatContext);
  const {OwneruserId} = useContext(AuthContext)

  //** FUNCTIONAL
  const handlerSinglChat = async (isAllowHandler) => {
    if(isAllowHandler) {
    let {ID_SinglChat, PrevUserAndChat :{prevUSer, prevChat}} =  await Create_Singl_Chat(QuestIdUser, avatarFile, nick, ISOnlineUsers);

    if(ID_SinglChat && socket.connected){
      socket.emit("join", { ID_SinglChat, QuestIdUser, OwneruserId } );
      
      if(ID_SinglChat !== prevChat && prevChat){
        socket.emit('leave', {prevUSer, prevChat})
      }
    
    }else if(!socket.connected){
      console.log(socket);
      console.log('no have connetction with socket');
    }

    } 
  };

  //** RENDER
  return (
    <>
    <WrapperAvatar  onClick={()=> handlerSinglChat(isAllowHandler)} widthAvatar={widthAvatar}>
        <ContainerAvatar color = {`${ISOnlineUsers}`}>
          <AvatarImg
            widthAvatar={widthAvatar}
            src={ avatarFile ? `${DOMAIN_NAME}/uploadedAvatar/${avatarFile}` : 
            `${DOMAIN_NAME}/uploadedAvatar/1604401363609-i7po8uwvgxb-defualt_avatar.png`}
          ></AvatarImg>
        </ContainerAvatar>
        <ContainerAdditionalPart>
          <P_userName widthAvatar={widthAvatar}>{nick}</P_userName>
          {addOptions ? "" : <DotsIcon />}
        </ContainerAdditionalPart>
      </WrapperAvatar>
    
    </>
  );
};

export default AnotherUsers;
