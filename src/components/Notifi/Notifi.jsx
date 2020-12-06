import React from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { SinglChatContext } from "../Context/SinglChatContext/SinglChatContext"
import AnotherUsers from "../sideBar/Users/AnotherUsers/anotherUsers"
import {SEARCH_ADDED_USERES_ONLINE} from "../../Helper/api"
import { useState } from "react"

const Notifi = ({isWhoNotifi, socket}) =>{
   const [GenerUSersOnline, setGeneralUSersOnline] = useState([])

const SearchUsersOnline = async ()=>{
   try {
      let res = await fetch(SEARCH_ADDED_USERES_ONLINE, {
         method: 'GET'
      })
      let {message} = await res.json()
      if(message){
         setGeneralUSersOnline(message)
      }
   } catch (error) {
      
   }
}
const checkIsGeneralAddedOnline = (GenerUSersOnline, IdUser)=>{
   let findeOne = GenerUSersOnline.find((user)=> user.OwneruserId == IdUser)
   if(findeOne) return true
   return false
 }
useEffect(()=>{
   SearchUsersOnline()
},[isWhoNotifi])
   return (
      <>
      {isWhoNotifi.map((notifi, index)=>{

         return (
            <AnotherUsers 
            key={notifi.idMessage}
            nick={notifi.senderNick}
            avatarFile={notifi.senderAvatar}
            QuestIdUser={notifi.idSender}
            isAllowHandler={1}
            socket ={ socket}
            ISOnlineUsers={checkIsGeneralAddedOnline(GenerUSersOnline, notifi.idSender) ? ' #25cc49': '#ff0000'}
            />
         )
      })}
      </>
   )
}

export default Notifi