import React, { useContext } from "react";
import PageChat from "../../page/PageChat/PageChat";
import PageLoginUp from "../../page/PageLoginUp/PageLoginUp";
import PageForgetPassword from "../../page/PageForgetPassword/PageForgetPassword";
import PageSignIn from "../../page/PageSignin/PageSignin";
import PageResetPassword from "../../page/PageResetPassword/PageResetPassword";
import Confirmed from "../../components/confirmed/confirmed";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext/AuthContext";
import SignIn from "../../UI/Signin/SignIn";
export const Routes = () => {
  const { isAuth, OwneruserId } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat" exact>
          {isAuth ? <PageChat /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          <PageSignIn />
        </Route>
        <Route exact path="/loginUp">
          <PageLoginUp />
        </Route>
        <Route exact path="/api/auth/recoveryPassword">
          <PageForgetPassword />
        </Route>
        <Route exact path="/api/auth/resetPassword:resetPasswordToken">
          <PageResetPassword />
        </Route>
        <Route exact path="/api/auth/confirmation:EmailToken">
          <Confirmed />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
