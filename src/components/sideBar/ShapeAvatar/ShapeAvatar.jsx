import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { UploadContext } from "../../Context/UploadAvatar/UploadContext";
import {DOMAIN_NAME} from "../../../Helper/api"
import {
  WrapperAvatar,
  AvatarImg,
  P_userName,
  ContainerAvatar,
} from "./ShapeAvatar_sty";
const ShapeAvatar = ({
  isuserName,
  height,
  width,
  indicator,
  nickname,
  marg_l,
}) => {
  const { fileName } = useContext(UploadContext);

  return (
    <>
      <WrapperAvatar marg_l={marg_l}>
        <ContainerAvatar height={height} width={width} indicator={indicator}>
          {fileName ?  
          <AvatarImg
            height={height}
            width={width}
            src={`${DOMAIN_NAME}/uploadedAvatar/${fileName}`}
          ></AvatarImg> : "" }
         

        </ContainerAvatar>
        <P_userName userName={isuserName}>{nickname}</P_userName>
      </WrapperAvatar>
    </>
  );
};

export default ShapeAvatar;
