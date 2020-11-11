import React, { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  FormSignin,
  InputEmail,
  InputPassword,
  BattonSubmit,
  RowIcon,
  P,
  BoxOfP,
  LinkLoginUp,
  P_error,
} from "./styledSignin";
import { AuthContext } from "../../components/Context/AuthContext/AuthContext";
import {
  Redirect,
  useParams,
} from "react-router-dom";
import Preloader from "../../components/preloeder/Preloader";
import {GlobalStyle} from "../../styles/globalStyles/styled"

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [DisableButton, setDisabled] = useState(true);
  const { EmailToken } = useParams();
  const {
    conFirmedEmail,
    isloading,
    isAuth,
    SignIn,
    error,
    clearError,
    confirmationEmail,
    errorExpiredToken,
  } = useContext(AuthContext);
  let token = JSON.parse(localStorage.getItem("user_Token"));

  const _onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (form.email == "" || form.password == "") {
      setDisabled(true);
      clearError();
    } else {
      setDisabled(false);
    }
    if (EmailToken !== ":EmailToken" && EmailToken !== undefined) {
      confirmationEmail(EmailToken);
    }
  }, [form, EmailToken]);

  const _onSubmit = (e) => {
    e.preventDefault();
    SignIn(form);
  };
  if (isAuth) {
    return <Redirect to="/chat" />;
  } else if (token && !isloading) {
    return (
      <>
        <Preloader />
      </>
    );
  }
  return (
    <>
    <GlobalStyle/>
      <Wrapper>
        <FormSignin>
          <h3>Sign In</h3>
          <InputEmail
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={_onChange}
          />
          <InputPassword
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={_onChange}
          />
          <BattonSubmit
            onClick={_onSubmit}
            disabled={DisableButton ? true : false}
          >
            <RowIcon />
          </BattonSubmit>
          <BoxOfP>
            <P>
              If you don't have an account you can login up{" "}
              <LinkLoginUp to="/loginUp">HERE</LinkLoginUp>
            </P>
            <P>
              <LinkLoginUp to="/api/auth/recoveryPassword">
                Forget password?
              </LinkLoginUp>
            </P>
            {error ? <P_error>{error}</P_error> : ""}
            {errorExpiredToken ? <P_error>{errorExpiredToken}</P_error> : ""}
          </BoxOfP>
        </FormSignin>
      </Wrapper>
    </>
  );
};

export default SignIn;
