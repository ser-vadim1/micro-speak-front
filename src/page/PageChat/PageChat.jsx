import React, {useCallback, useState, useEffect, useContext} from "react";
import MainWindow from "../../components/mainWindow/MainWindow";
import SideBar from "../../components/sideBar/sidebar";
import Wrapper from "../../components/Wrapper_APP/styled";
import {DOMAIN_NAME, GET_NOTIFI_DB} from "../../Helper/api"
import { GlobalStyle } from "../../styles/globalStyles/styled";
import {AuthContext} from "../../components/Context/AuthContext/AuthContext"
import {SinglChatContext} from "../../components/Context/SinglChatContext/SinglChatContext"
import io from "socket.io-client";

const PageChat = () => {

  const { OwneruserId, token, isAuth } = useContext(AuthContext);
  const { ID_SinglChat, QuestIdUser, setIdSinglChat, setAvatarFile } = useContext(
    SinglChatContext
  );
  const [gotNotifi, setGotNotifi] = useState([])
  const [socket, setSocket] = useState("")
  
useEffect(()=>{
      let  Newsocket = io(`${DOMAIN_NAME}`,  {
        path: "/chat",
        reconnectionDelay: 1000,
        reconnection:true,
        reconnectionAttempts: 10,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false,
      });
      Newsocket.on('connect', ()=>{
        if(Newsocket.connected){
        console.log(Newsocket);
          setSocket(Newsocket)

        
        }
      })
      

        if(!isAuth){
          // ** This part is respond for remove event socket "historyMEssage" and remove component " anotherUser" at partOfHeader
          setIdSinglChat("")
          setAvatarFile("")
          // ! Возможно стоит расмотреть отсоеденение сокета на стороне сервера через прослушку
        }
    return () => {
      Newsocket.close()
      setSocket("")
      setIdSinglChat("")
      setAvatarFile("")
    }
  },[])


  return (
    <>
      <GlobalStyle whiteColor />
      <Wrapper>
        <SideBar  socket={socket}  />
        <MainWindow socket={socket} />
      </Wrapper>
    </>
  );
};

export default PageChat;
