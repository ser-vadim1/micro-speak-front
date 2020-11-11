import styled from "styled-components";

export const WrapperAvatar = styled.div`
  margin-top: 21px;
  display: flex;
  align-items: center;
  margin-left: ${({ marg_l }) => (marg_l ? "12px" : "")};
`;

export const AvatarImg = styled.img`
  width: ${(props) => props.width || "70px"};
  height: ${(props) => props.height || "70px"};
  border-radius: 50%;
  object-fit: cover;
`;

export const ContainerAvatar = styled.div`
  position: relative;
  width: ${(props) => props.width || "70px"};
  height: ${(props) => props.height || "70px"};
  &::before {
    display: ${(props) => (props.indicator ? "" : "none")};
    position: absolute;
    content: "";
    top: 80%;
    left: 80%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 0.5px solid #ffffff;
    background-color: #25cc49;
  }
`;

export const P_userName = styled.p`
  opacity: ${(props) => (props.userName ? 1 : 0)};
  display: flex;
  justify-content: center;
  padding-left: 10px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
`;
