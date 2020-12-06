import React from "react"


export const useGetPrevState = (ID_SinglChat) =>{
   let arr = []
   if(ID_SinglChat){
      arr.push(ID_SinglChat)
      console.log('arr',arr);
   }

   return arr
}