import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import PageChat from "../../page/PageChat/PageChat";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import {
  Container,
  Wrapper,
  Close,
  BattonBackChat,
  LinkBack,
  WrapperLink,
} from "./Confirmedstyled";

const Confirmed = () => {
  const { setConfirmedEmail } = useContext(AuthContext);
  const { EmailToken } = useParams();
  const { confirmationEmail, conFirmedEmail, isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (EmailToken !== ":EmailToken" && EmailToken !== undefined) {
      confirmationEmail(EmailToken);
    }
  }, [EmailToken]);
  
  const BacktoChat = () => {
    setConfirmedEmail(false);
  };
  if (isAuth && !conFirmedEmail) {
    return <Redirect to="/chat" />;
  }
  return (
    <>
      <Container>
        <Wrapper>
          <Close />
          <h3>Account Email Address Confirmation Failed</h3>
          <p>
            We were unable to confirm your account email address. Please resend
            the confirmation email and try again.
          </p>
          <LinkBack to="/chat" onClick={BacktoChat}>
            {<p style={{ marginTop: "8px" }}>Back to chat</p>}
          </LinkBack>
        </Wrapper>
      </Container>
    </>
  );
};

export default Confirmed;
