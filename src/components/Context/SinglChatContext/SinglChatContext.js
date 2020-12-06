import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { CREATE_SINGL_CHAT, SEARCH_GENERAL_USERS, DOMAIN_NAME, SEARCH_ADDED_USERES_ONLINE } from "../../../Helper/api";
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
  const [isOnlineForNotifi, SetisOnlineForNotifi] = useState([])
  const [prevUserAndChat, SetprevUserAndChat] = useState({
    prevUSer: "",
    prevChat: ""
  })

  //** FUNCTIONAL

  const Create_Singl_Chat = async (QuestIdUser, avatarFile, nick, ISOnlineUsers) => {
    try {
      let res = await fetch(
        `${CREATE_SINGL_CHAT}?OwnerUserId=${OwneruserId}&questIdUser=${QuestIdUser}`,
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

 // !!!!! УБРАТЬ ЭТИ НАГРОЖДЕНИЯ !!!!!!!!!!!!!!!!1
 if(data.ID_SinglChat !== prevUserAndChat.prevChat){
  SetprevUserAndChat({prevUSer: QuestIdUser, prevChat: data.ID_SinglChat})
 }
        setAvatarFile(avatarFile);
        setNickAnotherUser(nick);
        setQueastIdUser(QuestIdUser);
        setMarkOnline(ISOnlineUsers)
// !!!!!!!!!!   !!!!!!!!!!!!!!    !!!!!!!!!!!!!!!!!!!
        return {
          ID_SinglChat: data.ID_SinglChat,
          PrevUserAndChat: prevUserAndChat,
        }
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



  //** RENDER

  return (
    <SinglChatContext.Provider
      value={{
        isSearching,
        AvatarAnotherUser,
        ID_SinglChat,
        nickAnotherUser,
        QuestIdUser,
        isOnlineForNotifi,
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
        SetisOnlineForNotifi,
      }}
    >
      {children}
    </SinglChatContext.Provider>
  );
};
export const SinglChatConsumer = SinglChatContext.Consumer;
