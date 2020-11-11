import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {UPLOADAVATAR, PROFILE_GET_AVATAR, GET_AVATAR_FILE_NAME} from "../../../Helper/api"
export const UploadContext = React.createContext();

export const Uploadlayout = ({ children }) => {
  const [fileName, setFilename] = useState();
  const { token } = useContext(AuthContext);

  // **********************************************************************
  const HandlerUploadAvatar_db =  useCallback( async (upLoadAvatar)=>{
    let formData = new FormData();
    
    formData.append("avatar", upLoadAvatar);
    
    try {
      let res = await fetch(`${UPLOADAVATAR}`, {
        headers: {
          authorization: `${token}`,
        },
        method: "POST",
        body: formData,
        
      });

      let data = await res.json();
      if (data) {
        
        setFilename(data.filename);
        
        return data;
      }
    } catch (error) {
      console.log('HandlerUploadAvatar', error);
      
    }
  }, [fileName]) 

  useEffect(() => {
    async function getAvatar() {
      try {
        let res = await fetch(
          `${GET_AVATAR_FILE_NAME}`,
          {
            headers: {
              authorization: `${token}`,
            },
            method: "GET",
          }
        );
        
        let data = await res.json();

        if (data) {  
          setFilename(data.filename);
        }
      } catch (error) {
        console.log('Error at Upload Context at UseEffect', error);
        
      }
    }
    if (token) getAvatar();
  }, [token]);
  return (
    <UploadContext.Provider value={{ HandlerUploadAvatar_db, fileName }}>
      {children}
    </UploadContext.Provider>
  );
};

export const AuthConsumer = UploadContext.Consumer;
