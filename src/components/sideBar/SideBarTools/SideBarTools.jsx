import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { SinglChatContext } from "../../Context/SinglChatContext/SinglChatContext";
import {
  BoxOfTools,
  BoxAddchat,
  Plus,
  Chat,
  ContainerTools,
  ChatIcon,
  CallsIcon,
  ContactsIcon,
  NotificationIcon,
  BoxOfNotifiIcon,
  CounterOdNotifi,
  ContentOfNotifi,
} from "./styledSidebarTools";

const SideBarTools = ({ handlerisAddedChats, ControllerToolBars, socket, isWhoNotifi }) => {
  //** MAIN VARIABLES
const { NotifiCount} = ControllerToolBars
const {OwneruserId} = useContext(AuthContext)
// const [isWhoNotifi, setIsWhoNotifi] = useState([])
  //** FUNCTIONAL
  useEffect(()=>{
    if(socket){
//** Render is going only one time
      socket.emit('notification', { OwneruserId})
    }
  },[socket, OwneruserId])

  // useEffect(()=>{
  //   if(socket){
  //     socket.on("sendNotification", (notifiObj)=>{
  //       adjustState(notifiObj)
  //         handlerisAddedChats({type: "plusNotifi"})
  //         console.log('toolssssss');

  //         console.log("data at notifyMessage",notifiObj);
  //     })
  //   }
  // },[socket])



  const _IconChat = () => {
    handlerisAddedChats({type: 'IsOpenAddedChat'});
  };

  const _CallsIcon = () => {
    handlerisAddedChats({type: 'IsOpenCallIcon'});
  };

  const _ContactsIcon = () => {
    handlerisAddedChats({type: 'isOpenContactsIcon'});
  };

  const _NotifIcon = () => {
    handlerisAddedChats({type: 'isOpennotifIcon'});
  };

  //** RENDER

  return (
    <>
      <BoxOfTools>
        <BoxAddchat>
          <Plus>+</Plus>
          <Chat>Make group chat </Chat>
        </BoxAddchat>
        <ContainerTools>
          <ChatIcon onClick={_IconChat}
           isactive={ControllerToolBars.IsOpenAddedChat ? 1 : 0} />
          <CallsIcon
            onClick={_CallsIcon}
            isactive={ControllerToolBars.isOpenCallIcon ? 1 : 0}
          />
          <ContactsIcon
            onClick={_ContactsIcon}
            isactive={ControllerToolBars.isOpenContactsIcon ? 1 : 0}
          />
          
          <BoxOfNotifiIcon>
            <CounterOdNotifi isNotifi={isWhoNotifi.length > 0 ? "flex" : ""} >
              <ContentOfNotifi  >{isWhoNotifi.length}</ContentOfNotifi>
            </CounterOdNotifi>
          <NotificationIcon
            onClick={_NotifIcon}
            isactive={ControllerToolBars.isOpennotifIcon ? 1 : 0}
          />
          </BoxOfNotifiIcon>
     
        </ContainerTools>
      </BoxOfTools>
    </>
  );
};
export default SideBarTools;
