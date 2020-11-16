import styled, {keyframes} from "styled-components";
const rotatePreloader = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotateZ(-360deg);
  }
`;
const rotateCircle1 = keyframes`
 0% {
    opacity: 0;
  }
  0% {
    opacity: 1;
    transform: rotateZ(36deg);
  }
  7% {
    transform: rotateZ(0deg);
  }
  57% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`
 const rotateCircle2 = keyframes`
5% {
    opacity: 0;
  }
  5.0001% {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  12% {
    transform: rotateZ(-36deg);
  }
  62% {
    transform: rotateZ(-36deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`
const rotateCircle3 = keyframes`
 10% {
    opacity: 0;
  }
  10.0002% {
    opacity: 1;
    transform: rotateZ(-36deg);
  }
  17% {
    transform: rotateZ(-72deg);
  }
  67% {
    transform: rotateZ(-72deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`
const rotateCircle4 = keyframes`
 15% {
    opacity: 0;
  }
  15.0003% {
    opacity: 1;
    transform: rotateZ(-72deg);
  }
  22% {
    transform: rotateZ(-108deg);
  }
  72% {
    transform: rotateZ(-108deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`

const rotateCircle5 = keyframes`
 20% {
    opacity: 0;
  }
  20.0004% {
    opacity: 1;
    transform: rotateZ(-108deg);
  }
  27% {
    transform: rotateZ(-144deg);
  }
  77% {
    transform: rotateZ(-144deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`

const rotateCircle6 = keyframes`
25% {
    opacity: 0;
  }
  25.0005% {
    opacity: 1;
    transform: rotateZ(-144deg);
  }
  32% {
    transform: rotateZ(-180deg);
  }
  82% {
    transform: rotateZ(-180deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`
const rotateCircle7 = keyframes`
30% {
    opacity: 0;
  }
  30.0006% {
    opacity: 1;
    transform: rotateZ(-180deg);
  }
  37% {
    transform: rotateZ(-216deg);
  }
  87% {
    transform: rotateZ(-216deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`
const rotateCircle8 = keyframes`
 35% {
    opacity: 0;
  }
  35.0007% {
    opacity: 1;
    transform: rotateZ(-216deg);
  }
  42% {
    transform: rotateZ(-252deg);
  }
  92% {
    transform: rotateZ(-252deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`
const rotateCircle9 = keyframes`
40% {
    opacity: 0;
  }
  40.0008% {
    opacity: 1;
    transform: rotateZ(-252deg);
  }
  47% {
    transform: rotateZ(-288deg);
  }
  97% {
    transform: rotateZ(-288deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`
const rotateCircle10 = keyframes`
 45% {
    opacity: 0;
  }
  45.0009% {
    opacity: 1;
    transform: rotateZ(-288deg);
  }
  52% {
    transform: rotateZ(-324deg);
  }
  102% {
    transform: rotateZ(-324deg);
  }
  100% {
    transform: rotateZ(-324deg);
    opacity: 1;
  }
`


export const IMG = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

filter: ${({isLoadFile}) => isLoadFile ? "" : "blur(8px)"};

-webkit-filter: ${({isLoadFile})=> isLoadFile ? "" : "blur(8px)"};
`
export const BoxOfImg = styled.div`
position: relative;
border: 3px solid black;
width: 150px;
height: 100px;

`

export const Holder = styled.div`
 position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  /* z-index: 999; */
  /* background-color: #2D2F48; */
`
export const Div = styled.div``
export const Preloader = styled.div`
display: ${({isLoadFile})=> isLoadFile ? "none" : ""};
   width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: ${rotatePreloader} 2s infinite ease-in;

  & ${Div} {
   position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  }
  & ${Div}::before{
   content: "";
  position: absolute;
  left: 50%;
  top: 0%;
  width: 10%;
  height: 10%;
  background-color: #900020;
  transform: translateX(-50%);
  border-radius: 50%;
  }
  & ${Div}:nth-child(1){
   transform: rotateZ(0deg);
  animation: ${rotateCircle1} 2s infinite linear;
  z-index: 9;
  }
  & ${Div}:nth-child(2){
   transform: rotateZ(36deg);
  animation: ${rotateCircle2} 2s infinite linear;
  z-index: 8;
  }
  & ${Div}:nth-child(3){
   transform: rotateZ(72deg);
  animation: ${rotateCircle3} 2s infinite linear;
  z-index: 7;
  }
  & ${Div}:nth-child(4){
   transform: rotateZ(108deg);
  animation: ${rotateCircle4} 2s infinite linear;
  z-index: 6;
  }
  & ${Div}:nth-child(5){
   transform: rotateZ(144deg);
  animation: ${rotateCircle5} 2s infinite linear;
  z-index: 5;
  }
  & ${Div}:nth-child(6){
   transform: rotateZ(180deg);
  animation: ${rotateCircle6} 2s infinite linear;
  z-index: 4;
  }
  & ${Div}:nth-child(7){
   transform: rotateZ(216deg);
  animation: ${rotateCircle7} 2s infinite linear;
  z-index: 3;
  }
  & ${Div}:nth-child(8){
   transform: rotateZ(252deg);
  animation: ${rotateCircle8} 2s infinite linear;
  z-index: 2;
  }
  & ${Div}:nth-child(9){
   transform: rotateZ(288deg);
  animation: ${rotateCircle9} 2s infinite linear;
  z-index: 1;
  }
  & ${Div}:nth-child(10){
   transform: rotateZ(324deg);
  animation: ${rotateCircle10} 2s infinite linear;
  z-index: 0;
  }
`
