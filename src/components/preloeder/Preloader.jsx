import React from "react";
import "./style.css";
import { GlobalStyle } from "../../styles/globalStyles/styled";
const Preloader = () => {
  return (
    <>
      <GlobalStyle />
      <div className="cssload-loader">
        <div className="cssload-inner cssload-one"></div>
        <div className="cssload-inner cssload-two"></div>
        <div className="cssload-inner cssload-three"></div>
      </div>
    </>
  );
};

export default Preloader;
