import styled from "styled-components";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";

export const BoxOfTools = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  color: white;
  padding-bottom: 10px;
  position: absolute;
  height: 20%;
  width: 25%;
  top: 80%;
  background-color: #900020;
  text-align: center;
  border-bottom: 2px solid white;
  font-weight: 300;
`;

export const BoxAddchat = styled.div`
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  display: flex;
  padding-bottom: 10px;

  justify-content: center;
`;

export const Plus = styled.span`
cursor: pointer;
  font-size: 34px;
`;
export const Chat = styled.span`
cursor: pointer;
  font-size: 24px;
  padding-left: 15px;
  margin-top: 10px;
`;
export const ContainerTools = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 12px;
  padding-top: 35px;
  color: rgba(255, 255, 255, 0.5);
`;

export const ChatIcon = styled(ChatBubbleOutlineOutlinedIcon)`
  color: ${({ isactive }) => (isactive ? "white" : "")};
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
export const CallsIcon = styled(CallOutlinedIcon)`
  color: ${({ isactive }) => (isactive ? "white" : "")};
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const ContactsIcon = styled(PermContactCalendarOutlinedIcon)`
  color: ${({ isactive }) => (isactive ? "white" : "")};
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const  BoxOfNotifiIcon = styled.div`
  position: relative;
  `

export const CounterOdNotifi = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  width: 35px;
  height: 35px;
  border: 1px solid white;
  top: -5px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: -6px;
  background-color: #f74343;  
  `

export const ContentOfNotifi = styled.p`
`


export const NotificationIcon = styled(NotificationsOutlinedIcon)`
  color: ${({ isactive }) => (isactive ? "white" : "")};


  &:hover {
    color: white;
    cursor: pointer;
  }
`;
