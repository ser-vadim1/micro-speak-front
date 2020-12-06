import React, { useState, useEffect, useRef } from "react";
import {
  REGISTRATION_USER,
  CONFIRMATION_EMAIL,
  LOGIN_USER,
  PROFILE_SECRET_TOKEN,
  FORGET_PASS,
  RESET_PASS,
  DOMAIN_NAME,
} from "../../../Helper/api";

export const AuthContext = React.createContext();
let StorageName = "user_Token";

export const AuthLayout = ({ children }) => {
  //** MAIN VARIABLES
  const TimerRef = useRef(null);
  const [OwneruserId, setOwnerUserId] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [errorExpiredToken, setExpToken] = useState("");
  const [userName, setUserName] = useState("");
  const [doneMassage, setDoneMessage] = useState("");
  const [conFirmedEmail, setConfirmedEmail] = useState(false);

// const registerWithGoogle = async () => {
//   try {
//     let res = await fetch(`${DOMAIN_NAME}/api/auth/google`, {
//       headers: {
//         "Access-Control-Allow-Credentials": "*",
//         credentials: false,
//       },
//       method: 'GET'
//     })

//     let data = await res.json()

//     console.log(data);
//   } catch (error) {
    
//   }
// }


const registerWithGoogle = async () => {
  window.open(`${DOMAIN_NAME}/api/auth/facebook`, "_self");
}

  const register = async (body) => {
    try {
      const res = await fetch(REGISTRATION_USER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok && data.errors) {
        throw data.errors[0].msg;
      } else if (!res.ok && !data.errors) {
        throw data.message;
      }
      setDoneMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  //** FUNCTIONAL
  const confirmationEmail = async (EmailToken) => {
    try {
      let res = await fetch(`${CONFIRMATION_EMAIL}${EmailToken}`, {
        method: "GET",
        headers: {
          Authorization: `${EmailToken}`,
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      if (res.status === 200) {
        setAuth(true);
        setToken(data.RefreshToken);
        setOwnerUserId(data.OwneruserId);
        localStorage.setItem(StorageName, JSON.stringify(data.RefreshToken));
      } else if (res.status === 401) {
        setExpToken(data.message);
      } else if (res.status == 400) {
        setConfirmedEmail(true);
      }
    } catch (error) {}
  };

  const SignIn = async (body) => {
    try {
      let res = await fetch(`${LOGIN_USER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let dataToken = await res.json();
      if (!res.ok) {
        throw dataToken.message;
      }
      setToken(dataToken.token);
      setOwnerUserId(dataToken.OwneruserId);
      localStorage.setItem(StorageName, JSON.stringify(dataToken.token));
      setAuth(true);
      setConfirmedEmail(false);
      setExpToken("");
    } catch (error) {
      setError(error);
    }
  };
  const clearError = () => {
    setError(false);
  };

  useEffect(() => {
    const abortControler = new AbortController()
    const signal = abortControler.signal
    const data = JSON.parse(localStorage.getItem(StorageName));
    TimerRef.current = setTimeout(() => {
      if (data) {
        setAuth(true);
        setToken(data);
        setIsloading(true);
      }
    }, 1000);

    async function fetchUserData() {
      try {
        let response = await fetch(
          `${PROFILE_SECRET_TOKEN}?secret_token=${token}`,
          {
            method: "GET",
            signal: signal,
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status == 401) {
          setAuth(false);
          setToken(null);
          setOwnerUserId("");
          localStorage.removeItem(StorageName);
        }
        let data = await response.json();
        setUserName(data.nickname);
        setOwnerUserId(data.OwnerUserId);
      } catch (error) {
        console.log(error);
      }
    }
    if (token) {
      fetchUserData();
      
    }
    return () => {
      setError(false);
      clearTimeout(TimerRef.current);
      abortControler.abort()
    };
  }, [token, conFirmedEmail]);

  const signout = () => {
    setToken(null);
    setAuth(false);
    setConfirmedEmail(false);
    setOwnerUserId("");
    localStorage.removeItem(StorageName);
  };

  const SendemailForgotPass = async (body) => {
    try {
      let res = await fetch(`${FORGET_PASS}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      let data = await res.json();
      if (!res.ok) {
        throw data.message;
      }
      setDoneMessage(data.message);
    } catch (error) {
      setError(error);
    }
  };
  const ResetPassword = async (resetPasswordToken, body) => {
    try {
      let res = await fetch(`${RESET_PASS}${resetPasswordToken}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      let data = await res.json();

      if (!res.ok) {
        throw data.message;
      }
      setToken(data.token);
      localStorage.setItem(StorageName, JSON.stringify(data.token));
      setError("");
      setAuth(!isAuth);
    } catch (error) {
      setError(error);
    }
  };
  //** RENDER
  return (
    <AuthContext.Provider
      value={{
        OwneruserId,
        conFirmedEmail,
        isloading,
        isAuth,
        doneMassage,
        errorExpiredToken,
        token,
        error,
        userName,
        token,
        setConfirmedEmail,
        SignIn,
        register,
        signout,
        clearError,
        SendemailForgotPass,
        ResetPassword,
        confirmationEmail,
        setConfirmedEmail,
        registerWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
