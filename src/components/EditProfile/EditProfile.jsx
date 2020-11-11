// ! 1) Расмотреть перенос лигики формі (Password and userName) в отдельній компонент
import React, { useReducer, useState, useEffect } from "react";
import {
  ContainerEdit,
  H_Edit,
  Closeicon,
  BoxEdit,
  BoxEditPersonData,
  FormUserName,
  FormPassword,
  BoxOfIconEdit,
  Editicon,
  UsernameInput,
  UserPassworInput,
  Personicon,
  BoxOfIconS,
  Lockicon,
  BoxOfLockIcon,
  NoneVisibilityIcon,
  BoxOfVisibility,
  Visibilityicon,
} from "./styledEditprofile";
import ToolBarsEdit from "./ToolBarsEdit/ToolBarsEdit";

const EditProfile = ({ isOpen, handlerisOpen }) => {
  const [PropertyTrans, setPropertyTrans] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const changeTransition = () => {
    setPropertyTrans(!PropertyTrans);
  };

  const handlerSeePass = () => {
    setSeePassword(!seePassword);
  };

  useEffect(() => {
    if (!isOpen) {
      setPropertyTrans(false);
    }
  }, [isOpen]);
  return (
    <>
      <ContainerEdit isOpen={isOpen}>
        <H_Edit>Edit profile</H_Edit>
        <Closeicon onClick={handlerisOpen} />
        <BoxEdit>
          <BoxOfIconEdit>
            <Editicon onClick={changeTransition} />
          </BoxOfIconEdit>
          <BoxEditPersonData>
            <FormUserName>
              <BoxOfIconS>
                <Personicon />
              </BoxOfIconS>
              <UsernameInput widthTrans={PropertyTrans} />
            </FormUserName>
            <FormPassword>
              <BoxOfLockIcon>
                <Lockicon />
              </BoxOfLockIcon>
              <UserPassworInput
                widthTrans={PropertyTrans}
                seePassword={seePassword}
              />
              <BoxOfVisibility visible={PropertyTrans} onClick={handlerSeePass}>
                {seePassword ? <Visibilityicon /> : <NoneVisibilityIcon />}
              </BoxOfVisibility>
            </FormPassword>
          </BoxEditPersonData>
        </BoxEdit>
        <ToolBarsEdit isOpen={isOpen} handlerisOpen={handlerisOpen} />
      </ContainerEdit>
    </>
  );
};

export default EditProfile;
