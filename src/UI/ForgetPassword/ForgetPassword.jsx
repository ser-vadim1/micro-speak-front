import React, { useState, useContext, useEffect } from "react";
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
} from "./styledForgetPassword";
import { AuthContext } from "../../components/Context/AuthContext/AuthContext";

const ForgetPassword = () => {
  const [form, setForm] = useState({ email: "" });
  const [DisableButton, setDisabled] = useState(true);
  const { doneMassage, SendemailForgotPass, error, clearError } = useContext(
    AuthContext
  );

  const _onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    SendemailForgotPass(form);
  };

  useEffect(() => {
    if (form.email === "") {
      setDisabled(true);
      clearError();
    } else {
      setDisabled(false);
    }
  }, [form]);
  return (
    <>
      <Wrapper>
        <FormSignin>
          <h3>Password recovery</h3>
          <InputEmail
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={_onChange}
          />
          <BattonSubmit
            onClick={handlerSubmit}
            disabled={DisableButton ? true : false}
          >
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

export default ForgetPassword;
