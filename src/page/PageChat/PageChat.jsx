import React, {useCallback} from "react";
import MainWindow from "../../components/mainWindow/MainWindow";
import SideBar from "../../components/sideBar/sidebar";
import Wrapper from "../../components/Wrapper_APP/styled";
import {SEARCH_ADDED_USERES_ONLINE} from "../../Helper/api"

import { GlobalStyle } from "../../styles/globalStyles/styled";
import { useState } from "react";

const PageChat = () => {


  return (
    <>
      <GlobalStyle whiteColor />
      <Wrapper>
        <SideBar    />
        <MainWindow  />
      </Wrapper>
    </>
  );
};

export default PageChat;
