import React  from "react";
 import {AudioTag, SourceTag, Holder,Preloader, Div, Boxofaudio} from "./styledAudioUpload"
 
 const Audiouploaded = ({link, isLoadFile}) => {

   return (<>
   <Boxofaudio>
   <AudioTag controls isLoadFile={isLoadFile}>
     <SourceTag  src={link} type="audio/mpeg"/>
   </AudioTag>
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
   </Boxofaudio>
   
   </>)
 }

 export default Audiouploaded