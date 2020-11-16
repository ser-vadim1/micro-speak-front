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
  top:  ${({isOpenSliderChoosenFiles})=> isOpenSliderChoosenFiles ? "-125px" : "-25px;" };
  transform: translate(-50%, -50%);
  left: 92%;
`;

export const SliderOfChoosenFiles = styled.div`
display: ${({isOpenSliderChoosenFiles})=> isOpenSliderChoosenFiles ? "flex" : 'none'};
width: 100%;
height:${({isOpenSliderChoosenFiles})=> isOpenSliderChoosenFiles ? "100px" : '0px'};

`

export const BoxOfChoosenFiles = styled.div`
width: 150px;
&:not(:first-child){
  margin-left: 5px;
}
`

