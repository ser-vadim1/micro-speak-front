import React, { useState, useEffect, useRef } from "react";
 import {AudioTag, SourceTag} from "./styledAudioUpload"
 
 const AudioComponent = ({link}) => {

   return (<>
   <AudioTag controls>
     <SourceTag  src={`${link}`} type="audio/mpeg"/>
   </AudioTag>
   </>)
 }

 export default AudioComponent