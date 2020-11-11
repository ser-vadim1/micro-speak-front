import styled from "styled-components";
export const FlexBoxOfMessages = styled.div`
  order: ${(props) => props.order};
  display: flex;
  justify-content: ${(props) => (props.start ? "flex-start" : "flex-end")};
`;
export const MessageOrange = styled.div`
  position: relative;
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 10px;
  margin-top: 30px;
  background-color: #f8e896;
  height: auto;
  width: ${(props) => (props.CountFiles ? "550px" : "250px")};
  word-wrap: break-word;
  text-align: left;
  font: 400 0.9em "Open Sans", sans-serif;
  border: 1px solid #dfd087;
  border-radius: 10px;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 15px solid #f8e896;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    bottom: 0;
    right: -15px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 17px solid #dfd087;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    bottom: -1px;
    right: -17px;
  }
`;
export const MessageBlue = styled.div`
  position: relative;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
  padding: 10px;
  background-color: #a8ddfd;
  width: ${(props) => (props.CountFiles ? "500px" : "250px")};
  word-wrap: break-word;
  height: auto;
  text-align: left;
  font: 400 0.9em "Open Sans", sans-serif;
  border: 1px solid #97c6e3;
  border-radius: 10px;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid #a8ddfd;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: 0;
    left: -15px;
  }

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 17px solid #97c6e3;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    top: -1px;
    left: -17px;
  }
`;
export const IMGAnyFileMassageBlue = styled.img`
margin-top: 5px;
margin-left: 5px;
width: 230px;
object-fit: cover;
cursor: pointer;
`;

export const NickNameBlue = styled.div`
  position: absolute;
  padding-bottom: 5px;
  padding-right: 10px;
  left: 100%;
  top: 0%;
  transform: translate(-100%, 0%);
  color: #900020;
  font-weight: bold;
`;

export const AvatarMassageBlue = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarMassageOrange = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const WrapperAvatarMessageBlue = styled.div`
  position: absolute;
  margin-left: 10px;
  left: 100%;
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translateY(-50%);
`;
export const WrapperAvatarMessageOrange = styled.div`
  position: absolute;
  right: 100%;
  margin-right: 10px;
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translateY(-50%);
`;
export const BoxOfUploadedFiles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const NickNameOrange = styled.div`
  position: absolute;
  padding-bottom: 5px;
  padding-right: 10px;
  left: 100%;
  top: 0%;
  color: darkcyan;
  font-weight: bold;
  transform: translate(-100%, 0%);
`;
export const MessageContent = styled.p`
  padding: 0;
  padding-bottom: 5px;
  padding-top: 10px;
  margin: 0;
`;
export const MessageTimestampRight = styled.div`
  position: absolute;
  font-size: 0.85em;
  font-weight: 300;
  top: 100%;
  right: 5px;
`;
export const MessageTimestampLeft = styled.div`
  position: absolute;
  font-size: 0.85em;
  font-weight: 300;
  top: 100%;
  left: 5px;
`;
export const ModalWindow = styled.div`
cursor: pointer;
 visibility: ${({isOpenModal})=> isOpenModal ? "visible" : 'hidden'};
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1;
height: 100%;
border: 4px solid black;
width: 100%;
`

export const BoxofContentModal = styled.picture`
width: 900px;
height: 800px;
`
// ${({height})=> height ? height + 'px' : ""};
// ${({width})=> width ? width + 'px' : ""};

export const ContentImgModal = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

export const AudioTag = styled.audio`
outline-style: none;
width: 300px;
height: 25px;
margin-top: 5px;
`

export  const SourceTag = styled.source``