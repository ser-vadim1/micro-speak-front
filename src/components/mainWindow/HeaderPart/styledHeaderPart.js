import styled from "styled-components";

export const ContainerComunication = styled.div`
  position: relative;
  width: 100%;
  height: 30%;
  transition: height 1s linear 500ms;
  background: rgba(144, 0, 32, 0.3);
`;

export const BoxOfHeader = styled.div`
border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperAvatart = styled.div`
  position: absolute;
  right: 0%;
  top: 0;
`;

export const BaxOfCallingUsers = styled.div`
  /* margin-left: 25px; */
  transform: translateX(10%);
`;
