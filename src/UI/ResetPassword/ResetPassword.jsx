import React, { useState } from "react";
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
} from "./styledResetPassword";
import { Redirect, useParams, useRouteMatch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext/AuthContext";

const ResetPassword = () => {
  
  const { resetPasswordToken } = useParams();
  const { ResetPassword, error, doneMassage, isAuth } = useContext(AuthContext);
  const [body, setForm] = useState({ password: "" });

  const _onChange = (e) => {
    setForm({ ...body, [e.target.name]: e.target.value });
  };

  const _onSubmit = (e) => {
    e.preventDefault();
    ResetPassword(resetPasswordToken, body);
  };
  if (isAuth) {
    return <Redirect to="/chat" />;
  }
  return (
    <>
      <Wrapper>
        <FormSignin>
          <h3>Reset password</h3>
          <InputEmail
            type="password"
            placeholder="Enter your new password"
            name="password"
            onChange={_onChange}
          />
          <BattonSubmit onClick={_onSubmit}>
            <RowIcon />
          </BattonSubmit>
          <BoxOfP>
            <P>
              Back to <LinkLoginUp to="/">sign in</LinkLoginUp>
            </P>
            {doneMassage ? <P>{doneMassage}</P> : ""}
            {error ? <P>{error}</P> : ""}
          </BoxOfP>
        </FormSignin>
      </Wrapper>
    </>
  );
};

export default ResetPassword;
