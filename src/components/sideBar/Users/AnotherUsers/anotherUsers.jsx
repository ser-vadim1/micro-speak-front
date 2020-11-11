import React, { Profiler, useState } from "react";
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

const AnotherUsers = ({
  nick,
  avatarFile,
  questIdUser,
  addOptions,
  widthAvatar,
  ISOnlineUsers,
  isAllowHandler
}) => {
  //** MAIN VARIABLES
  const {Create_Singl_Chat} = useContext(SinglChatContext);

  //** FUNCTIONA


  const handlerSinglChat = (isAllowHandler) => {
    if(isAllowHandler) {
      Create_Singl_Chat(questIdUser, avatarFile, nick, ISOnlineUsers);
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
