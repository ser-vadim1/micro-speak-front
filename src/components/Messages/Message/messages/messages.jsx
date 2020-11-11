// ! Проработать lazyLoad для скрола

import React, { useState, useEffect, useRef } from "react";
import Message from "../Message";
import { BoxOfmessages } from "./styledMessages";

const Messages = ({ messages, ID_SinglChat, isOpenSliderChoosenFiles }) => {
  //** MAIN VARIABLES

  const messagesScrollEndRef = useRef(null);
  const TimerForScrollRef= useRef(null)

  //** FUNCTIONA
  const scrollToBottom = () => {
    messagesScrollEndRef.current.scrollTop = messagesScrollEndRef.current.scrollHeight + 200 + 'px'
    // window.scrollTo(0, messagesScrollEndRef.current.scrollHeight);
  };
  useEffect(() => {
    if(isOpenSliderChoosenFiles){
    TimerForScrollRef.current =  setTimeout(scrollToBottom, 100)
    } else {
      scrollToBottom()
    }

    return ()=>{clearTimeout(TimerForScrollRef.current)}
  }, [messages]);

  //** RENDER

  return (
    // ! Продумать варин с индексом в KEY - так как использовать индекс массива не желательно 
    <>
    <h1>lol2</h1>
      <BoxOfmessages ref={messagesScrollEndRef}  isOpenSliderChoosenFiles ={isOpenSliderChoosenFiles}>
        {messages.map((message, index) => {
          return <Message key={index} message={message} order={index} />;
        })}
      </BoxOfmessages>
    </>
  );
};

export default Messages;
