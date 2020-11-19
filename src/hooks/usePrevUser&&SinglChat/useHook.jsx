import React from "react"


export const useGetPrevState = (prevID_SinglChat, prevIdUser) =>{
   let arr = []
   arr.push({prevID_SinglChat: prevID_SinglChat, prevIdUser: prevIdUser})

   return arr
}