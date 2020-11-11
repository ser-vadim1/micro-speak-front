import React, { Fragment, useState } from "react";
import {
  ContainerComunication,
  BoxOfHeader,
  WrapperAvatart,
  BaxOfCallingUsers,
} from "./styledHeaderPart";
import ShapeAvatar from "../../sideBar/ShapeAvatar/ShapeAvatar";
import PartOfIcons from "../PartofIcons/PartofIcons";
import PartOfMessage from "../PartOFMessage/PartOfMessage";
import AnotherUsers from "../../sideBar/Users/AnotherUsers/anotherUsers";
import { useContext } from "react";
import { SinglChatContext } from "../../Context/SinglChatContext/SinglChatContext";

const VideoAndChatParts = () => {
  const { AvatarAnotherUser, nickAnotherUser, markOnline} = useContext(SinglChatContext);
 
  return (
    <>
      <ContainerComunication>
        <WrapperAvatart>
          {AvatarAnotherUser && nickAnotherUser ? (
            <AnotherUsers
              avatarFile={AvatarAnotherUser}
              nick={nickAnotherUser}
              addOptions
              widthAvatar
              ISOnlineUsers={markOnline}
              isAllowHandler={0}
            />
          ) : (
            ""
          )}
        </WrapperAvatart>
        <BoxOfHeader >
          <BaxOfCallingUsers>
            <ShapeAvatar height={"156px"} width={"156px"} />
          </BaxOfCallingUsers>
          <PartOfIcons  />
        </BoxOfHeader>
      </ContainerComunication>
      <PartOfMessage />
    </>
  );
};

export default VideoAndChatParts;
