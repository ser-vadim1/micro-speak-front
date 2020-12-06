import React, { useCallback, useState, useEffect } from "react";
import { useContext } from "react";
import { SinglChatContext } from "../Context/SinglChatContext/SinglChatContext";
import { Box, Container_search, Input, SearchIcon } from "./styledGeneralUsers";
import AnotherUsers from "../sideBar/Users/AnotherUsers/anotherUsers"

const ResultSearched = ({socket}) => {
     //** MAIN VARIABLES

      const {SearchGeneralUsers} = useContext(SinglChatContext)

      //** FUNCTIONAL
      const checkIsGeneralAddedOnline = (GenerUSersOnline, IdUser)=>{
         let findeOne = GenerUSersOnline.find((user)=> user.OwneruserId == IdUser)
         if(findeOne) return true

         return false
       }
      //** RENDER

      return (
      <>
            {SearchGeneralUsers.foundGenerUsers.map((user, index) => {
          return (
            <AnotherUsers
              key={user._id}
              nick={user.nick}
              avatarFile={user.avatar}
              QuestIdUser={user._id}
              isAllowHandler={1}
              socket ={ socket}
              ISOnlineUsers= {checkIsGeneralAddedOnline(SearchGeneralUsers.GenerUSersOnline, user._id)  
               ? ' #25cc49': '#ff0000'}
            />
          );
        })}
      </>)
}


export default ResultSearched