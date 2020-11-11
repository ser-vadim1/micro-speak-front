import React, { Fragment } from "react";
import { useState } from "react";
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
} from "./styledSidebarTools";

const SideBarTools = ({ handlerisAddedChats, ControllerToolBars }) => {
  //** MAIN VARIABLES


  //** FUNCTIONAL
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
          <NotificationIcon
            onClick={_NotifIcon}
            isactive={ControllerToolBars.isOpennotifIcon ? 1 : 0}
          />
        </ContainerTools>
      </BoxOfTools>
    </>
  );
};
export default SideBarTools;
