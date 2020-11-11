import React, { useRef, useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import AnotherUsers from "../sideBar/Users/AnotherUsers/anotherUsers";
import {DOMAIN_NAME, SEARCH_ADDED_USERES_ONLINE, GET_ADDED_CHAT} from "../../Helper/api"
import { SinglChatContext } from "../Context/SinglChatContext/SinglChatContext";

// ? I am trying make another connection of socket by nymesapce
import io from "socket.io-client";
import { useCallback } from "react";

const AddedChats = () => {
  const { OwneruserId, token } = useContext(AuthContext);
  const {SearchusersAdded, isSearching, AddedUsersOnline} = useContext(SinglChatContext)
  const [addedChats, setAddedChats] = useState([]);
  const [onlineAddedUsers, setOnlineAddedUsers] = useState([])
  const [historyUsersOnline, setHistoryUsersOnline] = useState([])

  const fetchUsersOnline = useCallback( async ()=>{
  try {
    let res = await fetch(`${SEARCH_ADDED_USERES_ONLINE}`, {
      method: "GET",
    })

    let data = await res.json()
    console.log(data);
    setHistoryUsersOnline(data.message)
    setOnlineAddedUsers(data.message)
  } catch (error) {
    console.log('fetchUsersOnline', error);
  }
}, [onlineAddedUsers]) 



const GetAddedChat = useCallback(async (signal) =>{
  try {
    let res = await fetch(
      `${GET_ADDED_CHAT}${OwneruserId}`,
      {
        method: "GET",
        signal: signal,
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    setAddedChats(data.CommonChats);
  } catch (error) {
    console.log(error);
  }
})


  useEffect(() => {
    let  isMounted = true
    const abortControler = new AbortController()
    const signal = abortControler.signal

    if (OwneruserId && isMounted) {
      if(SearchusersAdded.length >= 1 && isSearching){
        setAddedChats([...SearchusersAdded])
        setOnlineAddedUsers([...AddedUsersOnline])
      }else if(!isSearching){
        setOnlineAddedUsers([...historyUsersOnline])
        GetAddedChat(signal);
      }
    }

    return () =>{
      setAddedChats([])
      setOnlineAddedUsers([])
      isMounted =false
      abortControler.abort()
    }
  }, [OwneruserId, SearchusersAdded]);


useEffect(()=>{
  let  isMounted = true
  let socket;
  if(isMounted){
     socket = io(`${DOMAIN_NAME}`,{
      transports: ['polling'],
      query: {
        OwneruserId: OwneruserId
      } 
    })
    socket.on('changeStream', data => {
      console.log(data);
      fetchUsersOnline()
    })
  }


  return ()=>{
    socket.close()
    isMounted=false
  } 
},[OwneruserId])

// ! Отвратительна,я функия ПЕРЕДЕЛАТЬ!!!!!!!

const checkIsUserAddedOnline = (idQuest, _OwneruserId, OwneruserId) =>{
  if(_OwneruserId == OwneruserId){
    let findOne = onlineAddedUsers.find((userOnline)=> userOnline.OwneruserId == idQuest )
    if(findOne){
    return true
    }else {
      return false

    }
  }else if (_OwneruserId !== OwneruserId){
    let findOne = onlineAddedUsers.find((userOnline)=> userOnline.OwneruserId == _OwneruserId )
    if(findOne){
      return true
      }else {
        return false
      }
  }

}
  return (
    <>
      {addedChats.map((addedChat) => {
        return (
          <AnotherUsers
            key={addedChat._id}
            nick={
              addedChat.idAdmin !== OwneruserId
                ? addedChat.adminNick
                : addedChat.wasConnectedNick
            }
            avatarFile={
              addedChat.idAdmin !== OwneruserId
                ? addedChat.AdminAvatarFile
                : addedChat.QuestAvatarFile
            }
            questIdUser={
              addedChat.idAdmin !== OwneruserId
                ? addedChat.idAdmin
                : addedChat.idQuest
            }
            isAllowHandler={1}
            ISOnlineUsers = {checkIsUserAddedOnline(addedChat.idQuest, addedChat.idAdmin, OwneruserId) 
              ? ' #25cc49' : '#ff0000'}
          />
        );
      })}
    </>
  );
};

export default AddedChats;
