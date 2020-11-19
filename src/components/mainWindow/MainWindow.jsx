import React from "react";
import { WrapperMainWindow } from "./styledMainWindow";
import VideoAndChatParts from "../mainWindow/HeaderPart/HeaderPart";
import { useEffect } from "react";
// import {AuthContext} from "../Context/AuthContext/AuthContext"
// import {SinglChatContext} from "../Context/SinglChatContext/SinglChatContext"
// import {DOMAIN_NAME} from "../../Helper/api"
// import io from "socket.io-client";
 
const MainWindow = ({socket}) => {


  return (
    <>
      <WrapperMainWindow>
        <VideoAndChatParts socket={socket} />
      </WrapperMainWindow>
    </>
  );
};

export default MainWindow;
