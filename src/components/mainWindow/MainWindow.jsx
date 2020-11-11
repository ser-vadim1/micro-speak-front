import React from "react";
import { WrapperMainWindow } from "./styledMainWindow";
import VideoAndChatParts from "../mainWindow/HeaderPart/HeaderPart";

const MainWindow = () => {
  return (
    <>
      <WrapperMainWindow>
        <VideoAndChatParts  />
      </WrapperMainWindow>
    </>
  );
};

export default MainWindow;
