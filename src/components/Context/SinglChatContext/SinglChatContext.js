import React, { useState, useContext } from "react";
import {useLocation} from "react-router-dom"
import { AuthContext } from "../AuthContext/AuthContext";
import { CREATE_SINGL_CHAT, SEARCH_GENERAL_USERS, DOMAIN_NAME, SEARCH_ADDED_USERES_ONLINE } from "../../../Helper/api";
import { useEffect } from "react";
import io from "socket.io-client";
export const SinglChatContext = React.createContext();
export const SinglChatLayout = ({ children }) => {

  //** MAIN VARIABLES
  
  const { OwneruserId, token, isAuth } = useContext(AuthContext);
  const [ID_SinglChat, setIdSinglChat] = useState("");
  const [SearchGeneralUsers, setSearchGeneralUsers] = useState({foundGenerUsers: [], GenerUSersOnline: []});
  const[isSearching, setIsSearching] = useState(false)
  const [SearchusersAdded, setSearchAddedUsers] = useState([])
  const [AddedUsersOnline, setaddedUsersOnline] = useState([])
  const [QuestIdUser, setQueastIdUser] = useState("");
  const [AvatarAnotherUser, setAvatarFile] = useState("");
  const [nickAnotherUser, setNickAnotherUser] = useState("");
  const [markOnline, setMarkOnline] = useState("")
  const [socket, setSocket] = useState("")

  //** FUNCTIONAL

  const Create_Singl_Chat = async (questIdUser, avatarFile, nick, ISOnlineUsers) => {
    try {
      let res = await fetch(
        `${CREATE_SINGL_CHAT}?OwnerUserId=${OwneruserId}&questIdUser=${questIdUser}`,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      let data = await res.json();
      if (data) {
        
        setIdSinglChat(data.ID_SinglChat);
        setAvatarFile(avatarFile);
        setNickAnotherUser(nick);
        setQueastIdUser(questIdUser);
        setMarkOnline(ISOnlineUsers)

      }
    } catch (error) {
      console.log("Error at func create singl chat", error);
    }
  };

  const fetchSearch = async (BodyQuery, signal) => {
    try {
      const RES_GENER_USERS = await fetch(
        `${SEARCH_GENERAL_USERS}?OwneruserId=${OwneruserId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(BodyQuery),
          signal: signal,
      
        }
      );
      const RES_GENER_USERS_ONLINE = await fetch(`${SEARCH_ADDED_USERES_ONLINE}`, {
        method: "GET",
        signal: signal,
      })
  
      const DATA_GENER_USERES_ONLINE = await RES_GENER_USERS_ONLINE.json()

      const DATA_GENER_USERS = await RES_GENER_USERS.json();

      if(DATA_GENER_USERES_ONLINE && DATA_GENER_USERS){
        setSearchGeneralUsers({
          foundGenerUsers: DATA_GENER_USERS,
          GenerUSersOnline: DATA_GENER_USERES_ONLINE.message
        })
      }
    } catch (error) {
      if(error.name == 'AbortError'){
        console.log('xxxxx');
        
      }
      console.log(error);
    }
  };
// ** Этой функицей я очищаю STATE в компоненте SEARCH когда e.target === null
  const clearFunc = () =>{
    setSearchGeneralUsers({...SearchGeneralUsers ,foundGenerUsers: []})
    setSearchAddedUsers([])
    setIsSearching(false)
  }

  const fetchSearchAddedUsers = async (BodyQuery, signal) =>{
    try {
      const  RES_ADDED_USERS = await fetch(`${DOMAIN_NAME}/api/search/addedUsers/${OwneruserId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(BodyQuery),
      })

      const RES_ADDED_USERS_ONLINE = await fetch(`${SEARCH_ADDED_USERES_ONLINE}`, {
        method: "GET",
        signal: signal,
      })

      const DATA_ADDED_USERES_ONLINE = await RES_ADDED_USERS_ONLINE.json()

      const DATA_ADDED_USERS = await RES_ADDED_USERS.json()

      if(DATA_ADDED_USERS && DATA_ADDED_USERES_ONLINE){
        setIsSearching(true)
        setaddedUsersOnline(DATA_ADDED_USERES_ONLINE.message)
        setSearchAddedUsers(DATA_ADDED_USERS.message) 
        
      }
    } catch (error) {
      console.log('fetchSearchAddedUsers ERROR', error);
      
    }
  }


useEffect(()=>{
let  Newsocket = io(`${DOMAIN_NAME}`,  {
  reconnectionDelay: 1000,
  reconnection:true,
  reconnectionAttempts: 10,
  transports: ['websocket'],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false,
  transports: ['polling']
});
setSocket(Newsocket)
  
    if(!isAuth){
      // ** This part is respond for remove event socket "historyMEssage" and remove component " anotherUser" at partOfHeader
      setIdSinglChat("")
      setAvatarFile("")
      // ! Возможно стоит расмотреть отсоеденение сокета на стороне сервера через прослушку
    }

// return () => Newsocket.close()
  
},[DOMAIN_NAME, isAuth, token, OwneruserId])
  //** RENDER

  return (
    <SinglChatContext.Provider
      value={{
        isSearching,
        AvatarAnotherUser,
        ID_SinglChat,
        nickAnotherUser,
        QuestIdUser,
        socket,
        SearchusersAdded,
        SearchGeneralUsers,
        markOnline,
        AddedUsersOnline,
        Create_Singl_Chat,
        fetchSearch,
        setAvatarFile,
        setNickAnotherUser,
        setQueastIdUser,
        setIdSinglChat,
        fetchSearchAddedUsers,
        clearFunc,
        setMarkOnline,
      }}
    >
      {children}
    </SinglChatContext.Provider>
  );
};
export const SinglChatConsumer = SinglChatContext.Consumer;
