import styled from "styled-components";
// all 1s linear
export const BoxOfmessages = styled.div`
border: 1px solid black;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  height: ${({ isOpenSliderChoosenFiles }) => isOpenSliderChoosenFiles ? "55%" : "580px"};
  left: 25%;
  top: 30%;
  /* transition:  all 1s linear 500ms; */
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

