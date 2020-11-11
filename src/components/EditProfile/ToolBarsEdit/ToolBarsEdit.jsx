import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { WrapperAvatar } from "../../sideBar/ShapeAvatar/ShapeAvatar_sty";
import {
  ContainerIcons,
  FlexBoxOfIcon,
  ShelfIcon,
  MicroIcon,
  P_funcIcon,
  CameraTestIcon,
  Checkicon,
  ShelfIconCheck,
  MoveToPayIcon,
  ApplyButton,
  FlexOfApply,
  SignoutBatton,
  AddAvatar,
  WrapperFormAddAvatar,
  Label,
  InputIcon,
} from "./styledToolBars";
import { reducer } from "../../../Reducer/Reducer";
import { useReducer } from "react";
import { UploadContext } from "../../../components/Context/UploadAvatar/UploadContext";

const ToolBarsEdit = ({ isOpen, handlerisOpen }) => {
  const { signout } = useContext(AuthContext);
  const { HandlerUploadAvatar_db } = useContext(UploadContext);
  const [upLoadedAvatar, setUpLoadAvatar] = useState();

  const onUpLoadAvatar = (e) => {
    setUpLoadAvatar(e.target.files[0]);
  };
  const ApplyHandler = async (e) => {
    e.preventDefault();
    let data = HandlerUploadAvatar_db(upLoadedAvatar);
    if (data) handlerisOpen();
  };

  return (
    <>
      <ContainerIcons>
        <FlexBoxOfIcon>
          <ShelfIcon>
            <MicroIcon />
          </ShelfIcon>
          <P_funcIcon>Microphone test</P_funcIcon>
        </FlexBoxOfIcon>
        <FlexBoxOfIcon>
          <ShelfIcon>
            <CameraTestIcon />
          </ShelfIcon>
          <P_funcIcon>Camera test</P_funcIcon>
        </FlexBoxOfIcon>
        <FlexBoxOfIcon>
          <ShelfIconCheck>
            <Checkicon />
          </ShelfIconCheck>
          <P_funcIcon>Activet</P_funcIcon>
          <FlexBoxOfIcon>
            <ShelfIconCheck mr_l={true}>
              <MoveToPayIcon />
            </ShelfIconCheck>
            <P_funcIcon>Move to pay</P_funcIcon>
          </FlexBoxOfIcon>
        </FlexBoxOfIcon>
        {/* ****************************************************** */}
        <WrapperFormAddAvatar
        accept="image/*"
          encType="multipart/form-data"
          onChange={onUpLoadAvatar}
        >
          <Label htmlFor="file-input">
            <FlexBoxOfIcon>
              <ShelfIconCheck>
                <AddAvatar />
              </ShelfIconCheck>
              <P_funcIcon>Add avatart</P_funcIcon>
            </FlexBoxOfIcon>
          </Label>
          <InputIcon id="file-input" type="file"></InputIcon>
        </WrapperFormAddAvatar>
        {/* ******************************************************************** */}
        <FlexOfApply>
          <SignoutBatton onClick={signout}>Sign out</SignoutBatton>
          <ApplyButton onClick={ApplyHandler}>Apply</ApplyButton>
        </FlexOfApply>
      </ContainerIcons>
    </>
  );
};

export default ToolBarsEdit;
