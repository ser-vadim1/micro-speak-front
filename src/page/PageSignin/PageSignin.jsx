import React from "react";
import SignIn from "../../UI/Signin/SignIn";
import { useParams, usePatams, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext/AuthContext";

const PageSignIn = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default PageSignIn;
