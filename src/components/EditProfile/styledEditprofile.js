import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import MicNoneIcon from "@material-ui/icons/MicNone";
import VisibilityIcon from "@material-ui/icons/Visibility";

export const ContainerEdit = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  left: 25%;
  top: 0;
  height: 380px;
  width: 280px;
  background-color: #900020;
  z-index: 99;
`;
export const H_Edit = styled.h4`
  position: relative;
  color: white;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

export const Closeicon = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  left: 90%;
  top: 5.5%;
  color: white;
`;

export const BoxEdit = styled.div`
  display: flex;
`;
export const BoxEditPersonData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormUserName = styled.form`
  display: flex;
  position: relative;
`;

export const FormPassword = styled.form`
  display: flex;
  position: relative;
`;

export const UsernameInput = styled.input`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  outline: none;
  color: white;
  width: ${({ widthTrans }) => (widthTrans ? "90%" : "0%")};
  height: 34px;
  border-radius: 5px;
  margin-left: 10px;
  padding-left: ${({ widthTrans }) => (widthTrans ? "50px" : "0px")};
  transition: all 0.5s cubic-bezier(0, 0, 1, 1);
`;
export const UserPassworInput = styled.input.attrs((props) => ({
  type: props.seePassword ? "text" : "password",
}))`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  outline: none;
  color: white;
  width: ${({ widthTrans }) => (widthTrans ? "90%" : "0%")};
  height: 34px;
  margin-top: 10px;
  border-radius: 5px;
  margin-left: 10px;
  padding-left: ${({ widthTrans }) => (widthTrans ? "50px" : "0px")};
  transition: all 0.5s cubic-bezier(0, 0, 1, 1);
`;
export const BoxOfIconEdit = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Editicon = styled(EditIcon)`
  color: #900020;
  cursor: pointer;
`;

export const Personicon = styled(PersonIcon)`
  color: #900020;
`;

export const BoxOfVisibility = styled.div`
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  position: absolute;
  left: 85%;
  top: 60%;
  transition: ${({ visible }) =>
    visible ? "all .5s linear 500ms" : "all .1s linear "};
`;
export const NoneVisibilityIcon = styled(VisibilityOffIcon)`
  transform: translate(-50%, -50%);
  color: white;
  cursor: pointer;
`;

export const Visibilityicon = styled(VisibilityIcon)`
  transform: translate(-50%, -50%);
  color: white;
  cursor: pointer;
`;
export const BoxOfIconS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  top: 0px;
  border-radius: 5px;
  width: 40px;
  height: 100%;
  background-color: white;
`;

export const BoxOfLockIcon = styled(BoxOfIconS)`
  height: 72%;
  top: 24%;
`;

export const Lockicon = styled(LockIcon)`
  color: #900020;
`;
