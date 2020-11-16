import React  from "react";
import "./style.css"
import {IMG,BoxOfImg,Holder,Preloader, Div} from "./styledUploadedImg"

const ImgUploaded = ({link, isLoadFile}) =>{

   return (
      <>
      <BoxOfImg>
         <IMG  src={link} isLoadFile={isLoadFile}></IMG>
        <Holder>
           <Preloader isLoadFile={isLoadFile}>
               <Div></Div>
               <Div></Div>
               <Div></Div>
               <Div></Div>
               <Div></Div>
               <Div></Div>
               <Div></Div>
               <Div></Div>
               <Div></Div>
               <Div></Div>
           </Preloader>
        </Holder>
      </BoxOfImg>
      </>
   )
}

export default ImgUploaded