import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export const WrapperAvatar = styled.div`
  cursor: pointer;
  margin-top: 21px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  width: ${(props) => (props.widthAvatar ? "300px" : "")};
  color: white;

  &:hover {
    background-color: white;
    color: #900020;
  }
`;

export const AvatarImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;

`;

export const ContainerAvatar = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  &::before {
    position: absolute;
    content: "";
    top: 80%;
    left: 80%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 0.5px solid #ffffff;
    background-color: ${({color})=> color};
  }
`;
// #25cc49
export const P_userName = styled.p`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
`;
export const ContainerAdditionalPart = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  cursor: pointer;
`;
export const DotsIcon = styled(MoreHorizIcon)`
  margin-left: 100px;
`;
