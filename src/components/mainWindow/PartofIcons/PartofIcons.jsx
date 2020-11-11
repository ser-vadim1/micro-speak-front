import React, { Fragment, useReducer } from "react";
import {
  WrapperIcon,
  VolumeIcon,
  MicrofoneIcon,
  VideoCamIcon,
  CancaleCallIcon,
  BoxOfIonsWindow,
  WrapperIconRight,
  ChatIcon,
  CenterIcons,
} from "./styledPartOfIcons";

const PartOfIcons = ({ handlerVideoScreen }) => {
  return (
    <>
      <BoxOfIonsWindow>
        <CenterIcons>
          <WrapperIcon colar={"white"}>
            <VolumeIcon />
          </WrapperIcon>
          <WrapperIcon colar={"white"}>
            <MicrofoneIcon />
          </WrapperIcon>
          <WrapperIcon colar={"#787878;"}>
            <VideoCamIcon />
          </WrapperIcon>
          <WrapperIcon colar={"#fc0606"}>
            <CancaleCallIcon />
          </WrapperIcon>
        </CenterIcons>
      </BoxOfIonsWindow>
    </>
  );
};

export default PartOfIcons;
