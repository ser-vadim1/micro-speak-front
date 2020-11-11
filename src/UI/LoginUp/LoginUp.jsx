import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Wrapper,
  FormSignin,
  InputEmail,
  InputPassword,
  BattonSubmit,
  RowIcon,
  InputNick,
  P,
  BoxOfP,
  LinkSignIn,
} from "./styledLoginUp";
import { AuthContext } from "../../components/Context/AuthContext/AuthContext";

const LoginUp = () => {
  const [body, setForm] = useState({ nick: "", email: "", password: "" });
  const { isAuth, register, error, clearError, doneMassage } = useContext(
    AuthContext
  );
  const [DisableButton, setDisabled] = useState(true);

  const _onChange = (e) => {
    setForm({ ...body, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (body.email == "" || body.password == "" || body.nick == "") {
      setDisabled(true);
      clearError();
    } else {
      setDisabled(false);
    }
  }, [body]);

  const onSubmit = async (e) => {
    e.preventDefault();
    register(body);
  };

  if (isAuth) {
    return <Redirect to="/chat" />;
  }
  return (
    <>
      <Wrapper>
        <FormSignin>
          <h3>Login up</h3>
          <InputNick
            type="text"
            placeholder="Enter your Nick"
            name="nick"
            onChange={_onChange}
          />
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
            onClick={onSubmit}
            disabled={DisableButton ? true : false}
          >
            <RowIcon />
          </BattonSubmit>
          <BoxOfP>
            <P>
              Back to <LinkSignIn to="/">Sign in</LinkSignIn>
            </P>
            {error ? <P>{error}</P> : ""}
            {doneMassage ? <P>{doneMassage}</P> : ""}
          </BoxOfP>
        </FormSignin>
      </Wrapper>
    </>
  );
};

export default LoginUp;
