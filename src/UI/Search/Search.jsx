import React, { useCallback, useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce/useDebounce.jsx";
import { Box, Container_search, Input, SearchIcon } from "./styledSearch";
import { useContext } from "react";
import { SinglChatContext } from "../../components/Context/SinglChatContext/SinglChatContext";
import { useRef } from "react";

const Search = ({ ControllerToolBars }) => {
  //** MAIN VARIABLES

  const [BodyQuery, setQuery] = useState({ nick: "" });
  const { fetchSearch, clearFunc, fetchSearchAddedUsers,  } = useContext(SinglChatContext);
  const [isSearchingGeneralUsers, setisSearchingGeneralUsers] = useState(false);
  const [isSearchingAddedUsers, setIsSearchingAddedUsers] = useState(false)
  const TargetRef = useRef(null);

  const debouncedSearchTerm = useDebounce(BodyQuery.nick, 1000);

  //** FUNCTIONAL

  const handlerQuery = (e) => {
    setQuery({ ...BodyQuery, nick: e.target.value });
  };


  useEffect(() => {
const abortControler = new AbortController()
const signal = abortControler.signal

if(debouncedSearchTerm && ControllerToolBars.IsOpenAddedChat && BodyQuery !== ""){
    setQuery("");
    setIsSearchingAddedUsers(true)
    setisSearchingGeneralUsers(false);
    fetchSearchAddedUsers(BodyQuery, signal)

}else if(debouncedSearchTerm && ControllerToolBars.isOpenContactsIcon){
  setisSearchingGeneralUsers(true);
  setIsSearchingAddedUsers(false)
  fetchSearch(BodyQuery, signal);
  setQuery("");


}else if (TargetRef.current.value == ""){
  clearFunc()
}
else if((!ControllerToolBars.isOpenContactsIcon && isSearchingGeneralUsers) 
        || (!ControllerToolBars.IsOpenAddedChat && isSearchingAddedUsers )){
  TargetRef.current.value = "";
    setQuery("");
    clearFunc();
    setisSearchingGeneralUsers(false)
    setIsSearchingAddedUsers(false)
}

return ()=>{
  abortControler.abort()
}
  }, [debouncedSearchTerm, ControllerToolBars]);


  //** RENDER

  return (
    <>
      <Box>
        <Container_search>
          <SearchIcon></SearchIcon>
          <Input
            ref={TargetRef}
            type="search"
            placeholder="Search"
            name="nick"
            onChange={handlerQuery}
          ></Input>
        </Container_search>
      </Box>
    </>
  );
};

export default Search;
