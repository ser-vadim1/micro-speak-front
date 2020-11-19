import React, { useReducer, useCallback, useEffect, useState } from "react";
import { WrapperSidebar } from "./styled";
import SideBarTools from "./SideBarTools/SideBarTools.jsx";
import AddedChats from "../AddedFChats/AddedChats";
import MainUser from "./Users/MainUser";
import Search from "../../UI/Search/Search";
import ResultSearched from "../GeneralUsers/GeneralUsers"
import {reducerToolbarsIcons} from "../../Reducer/Reducer"

const SideBar = ({socket}) => {
  const [state, dispatch] = useReducer(reducerToolbarsIcons, { 
    IsOpenAddedChat: true, 
    isOpenCallIcon: false, 
    isOpenContactsIcon: false,
    isOpennotifIcon: false, 
  });



  return (
    <>
      <WrapperSidebar>
        <MainUser />
        <Search ControllerToolBars={state} />
        {state.IsOpenAddedChat ? <AddedChats socket={socket} /> : 
        state.isOpenContactsIcon ? <ResultSearched/> : ""}
        <SideBarTools handlerisAddedChats={dispatch} ControllerToolBars={state} socket={socket}  />
      </WrapperSidebar>
    </>
  );
};

export default SideBar;
