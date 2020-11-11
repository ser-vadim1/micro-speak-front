import styled from "styled-components";
import AttachFileIcon from "@material-ui/icons/AttachFile";


export const ContainerMessage = styled.div`
  display: flex;
  align-items: flex-end;
  height: 70%;
`;
export const BoxOfTypeMessage = styled.div`
margin: 0 auto;
`;

export const FormTypeMessage = styled.form`
  /* position: relative; */
`;

export const TypeMessage = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  color: white;
  padding-top: 15px;
  padding-left: 20px;
  border-radius: 10px;
  background: rgba(144, 0, 32, 0.3);
  min-width: 938px;
  &::placeholder {
    color: white;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const ClipIcon = styled(AttachFileIcon)`
  transform: rotate(45deg);
  color: black;
  cursor: pointer;
`;
export const WrapperFormAddAnyFile = styled.form`
position: relative;
  cursor: pointer;
`;
export const InputFile = styled.input`
  display: none;
`;
export const Label = styled.label`
  position: absolute;
  top:  ${({isOpenSliderChoosenFiles})=> isOpenSliderChoosenFiles ? "-105px" : "-25px;" };
  transform: translate(-50%, -50%);
  left: 92%;
`;

export const SliderOfChoosenFiles = styled.div`
display: ${({isOpenSliderChoosenFiles})=> isOpenSliderChoosenFiles ? "flex" : 'none'};
border: 4px solid black;
width: 100%;
height:${({isOpenSliderChoosenFiles})=> isOpenSliderChoosenFiles ? "80px" : '0px'};

`

export const BoxOfChoosenFiles = styled.div`
width: 150px;
margin-left: 5px;

`
export const ChoosenFiles = styled.img`
/* margin-left: -30px; */
border: 1px solid black;
width: 150px;
height: 70px;
object-fit: contain;
`



