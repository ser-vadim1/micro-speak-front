import styled from "styled-components";
import MicNoneIcon from "@material-ui/icons/MicNone";
import VideocamIcon from "@material-ui/icons/Videocam";
import CheckIcon from "@material-ui/icons/Check";
import CachedIcon from "@material-ui/icons/Cached";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";

export const ContainerIcons = styled.div``;
export const FlexBoxOfIcon = styled.div`
  margin-top: -5px;
  display: flex;
  align-items: center;
`;
export const FlexOfApply = styled(FlexBoxOfIcon)`
  justify-content: space-between;
  margin-top: 0px;
`;
export const P_funcIcon = styled.p`
  padding-left: 10px;
  color: white;
`;

export const ShelfIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  background-color: #b14c63;
`;
export const MicroIcon = styled(MicNoneIcon)`
  color: white;
  cursor: pointer;
`;
export const CameraTestIcon = styled(VideocamIcon)`
  color: white;
  cursor: pointer;
`;

export const ShelfIconCheck = styled(ShelfIcon)`
  margin-left: ${(props) => (props.mr_l ? "50px" : "")};
  background-color: white;
`;
export const Checkicon = styled(CheckIcon)`
  color: #b14c63;
  cursor: pointer;
`;

export const MoveToPayIcon = styled(CachedIcon)`
  color: #b14c63;
  cursor: pointer;
`;
export const ExxitIcon = styled(ExitToAppIcon)`
  margin-left: 10px;
  color: white;
  transform: rotate(180deg);
  cursor: pointer;
`;
export const ApplyButton = styled.button`
  border: none;
  padding: 10px 40px;
  margin-right: 10px;
  background-color: white;
  color: #b14c63;
  border-radius: 10px;
  cursor: pointer;
`;
export const SignoutBatton = styled(ApplyButton)`
  margin-right: 0px;
`;
export const AddAvatar = styled(FaceIcon)`
  color: #b14c63;
  cursor: pointer;
`;

export const WrapperFormAddAvatar = styled.form``;
export const Label = styled.label``;
export const InputIcon = styled.input`
  display: none;
`;
