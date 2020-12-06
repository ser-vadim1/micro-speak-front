// ! Проработать lazyLoad для скрола

import React, { useState, useEffect, useRef, useContext, useCallback } from "react";

import Message from "../Message";
import { BoxOfmessages, LoadMore } from "./styledMessages";
import {GET_ADDITIONAL_MASSAGES} from "../../../../Helper/api"
import {SinglChatContext} from "../../../../components/Context/SinglChatContext/SinglChatContext"

const Messages = ({ messages, ID_SinglChat, isOpenSliderChoosenFiles, setMessages, isSentMessage }) => {

  //** MAIN VARIABLES
const {prevUserAndChat} = useContext(SinglChatContext)
  const messagesScrollEndRef = useRef(null);
  const TimerForScrollRef= useRef(null)
  const [CountSkipMsg, setCountSkipMsg] = useState(10)
  const [prevChat, setPrevChat] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [_scrollTop, setScrollTop] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoading, seLoading] =useState(false)

  //** FUNCTIONA
  const scrollToBottom = () => {
    messagesScrollEndRef.current.scrollTop = messagesScrollEndRef.current.scrollHeight + 200 + 'px'
  };

  const fetchMEssageScrolledTop = async () => {
    try {
      let res = await fetch(`${GET_ADDITIONAL_MASSAGES}?ID_SinglChat=${ID_SinglChat}&count=${CountSkipMsg}`, {
        method: 'GET'
      })
      let {message} = await res.json();
      if(message.length > 0){
 
setTimeout(() =>{
  setMessages(prevMessages => [...message, ...prevMessages ])
  setCountSkipMsg(prev=> prev + 10)
  seLoading(true)

}, 1000)
      
      }else if(message.length ==0){
        setIsEmpty(true)
      }
    } catch (error) {
      
    }
  }
  


  





  useEffect(() => {
    if(isOpenSliderChoosenFiles){
    TimerForScrollRef.current =  setTimeout(scrollToBottom, 100)
    } else if (isSentMessage ||prevChat[0] == ID_SinglChat){
      scrollToBottom()


    }

    return ()=>{
      clearTimeout(TimerForScrollRef.current)
    }
  }, [CountSkipMsg, isSentMessage, ID_SinglChat]);


  useEffect(() => {
   
    setPrevChat(prevChat=>[...prevChat, ID_SinglChat])
    let lol;
    if(prevChat.length >=2){
      lol = prevChat.shift()
        if(prevChat[0] !== ID_SinglChat){
          setCountSkipMsg(10)
        }  
    }
  },[ID_SinglChat])


  //** RENDER

  return (
    // ! Продумать варин с индексом в KEY - так как использовать индекс массива не желательно 
    <>
      <BoxOfmessages  id="scrollableDiv" ref={messagesScrollEndRef}   
      isOpenSliderChoosenFiles ={isOpenSliderChoosenFiles}>
        {messages.map((message, index) => {
              return <Message key={index} message={message} order={index} />;
        })}
        </BoxOfmessages>
 
    </>
  );
};

export default Messages;
