import styled from "styled-components";
// all 1s linear
export const BoxOfmessages = styled.div`
  border: 3px solid black;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  height: ${({ isOpenSliderChoosenFiles }) => isOpenSliderChoosenFiles ? "480px" : "63%"};
  left: 25%;
  top: 30%;
  width: 75%;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #B8BDC4;
  scrollbar-track-color: black;

  &::-webkit-scrollbar-thumb {
    background-color: #900020;
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
`;

export const LoadMore = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 32%;
left: 89%;
transform: translate(-50%, -50%);
border: 1px solid black;
width: 150px;
height: 40px;
`