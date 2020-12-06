import React, { useReducer, useCallback, useEffect, useState } from "react";
import { WrapperSidebar } from "./styled";
import SideBarTools from "./SideBarTools/SideBarTools.jsx";
import AddedChats from "../AddedFChats/AddedChats";
import MainUser from "./Users/MainUser";
import Search from "../../UI/Search/Search";
import ResultSearched from "../GeneralUsers/GeneralUsers"
import {reducerToolbarsIcons} from "../../Reducer/Reducer"
import Notifi from "../Notifi/Notifi"
import { useContext } from "react";
import {SinglChatContext} from "../Context/SinglChatContext/SinglChatContext"
import {AuthContext} from "../Context/AuthContext/AuthContext"
import { useRef } from "react";
import {GET_NOTIFI_DB} from '../../Helper/api'

const SideBar = ({socket}) => {
  const {ID_SinglChat} = useContext(SinglChatContext)
  const {OwneruserId} = useContext(AuthContext)
  const [state, dispatch] = useReducer(reducerToolbarsIcons, { 
    IsOpenAddedChat: true, 
    isOpenCallIcon: false, 
    isOpenContactsIcon: false,
    isOpennotifIcon: false, 
    NotifiCount: 0,
  });
const [prevChat, setPrevChat] = useState([])
  const [isWhoNotifi, setIsWhoNotifi] = useState([])

  useEffect(()=>{
    if(isWhoNotifi.some((el)=> el.ID_SinglChat == ID_SinglChat) && socket){
      let index = isWhoNotifi.findIndex(el=> el.ID_SinglChat == ID_SinglChat)
      isWhoNotifi.splice(index, 1)
      setIsWhoNotifi(isWhoNotifi)
      socket.emit("removeNotifi", {ID_SinglChat})

    }
   
 
  },[isWhoNotifi, ID_SinglChat, socket])
  
  useEffect(()=>{
    const {notifiArr} = isWhoNotifi
    let isMonted =true
    if(socket && isMonted){
      socket.on("sendNotification", (notifiObj)=>{
        setIsWhoNotifi(prevIsWhoNotifi => [...prevIsWhoNotifi, notifiObj])
      })
    }

    return () =>{
      isMonted = false;
    }
  },[socket, OwneruserId])

  const fetchGetNotifi = async ()=>{
    try {
      let res = await fetch(`${GET_NOTIFI_DB}${OwneruserId}`, {
        method: 'GET'
      })

      let {message} = await res.json()
      console.log(message);

      if (message.length > 0){
      setIsWhoNotifi([...message])
      }
    } catch (error) {
      console.log('error at fetchGetNotifi', error);
    }
  }

  useEffect(() => {
    if(OwneruserId){
      fetchGetNotifi()
    }
  },[OwneruserId])

  return (
    <>
      <WrapperSidebar>
        <MainUser />
        <Search ControllerToolBars={state} />
        {
         state.IsOpenAddedChat ? <AddedChats socket={socket} /> : 
         state.isOpenContactsIcon ? <ResultSearched socket={socket}/> :
         state.isOpennotifIcon ? <Notifi isWhoNotifi={isWhoNotifi} socket={socket}/> 
         : ""
         }
        <SideBarTools handlerisAddedChats={dispatch} ControllerToolBars={state} socket={socket} isWhoNotifi={isWhoNotifi}  />
      </WrapperSidebar>
    </>
  );
};

export default SideBar;
