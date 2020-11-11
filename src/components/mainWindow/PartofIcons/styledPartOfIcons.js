import styled from "styled-components";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import CallEndOutlinedIcon from "@material-ui/icons/CallEndOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.colar};
`;

export const VolumeIcon = styled(VolumeUpOutlinedIcon)`
  color: #787878;
  border-radius: 50%;
`;
export const MicrofoneIcon = styled(MicNoneOutlinedIcon)`
  color: #787878;
`;
export const VideoCamIcon = styled(VideocamOffOutlinedIcon)`
  color: white;
`;
export const CancaleCallIcon = styled(CallEndOutlinedIcon)`
  color: white;
  /* width: 100px; */
  font-weight: 800;
`;

export const BoxOfIonsWindow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 0px;
`;
export const WrapperIconRight = styled(WrapperIcon)`
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`;

export const ChatIcon = styled(ChatBubbleOutlineIcon)`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  font-weight: 800;
`;

export const WrapperIconLeft = styled(WrapperIcon)`
  position: relative;
  margin-left: 20px;
`;

export const FullScreenIcon = styled(FullscreenIcon)`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CenterIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
