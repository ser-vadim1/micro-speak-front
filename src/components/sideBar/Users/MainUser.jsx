import React, {
  Fragment,
  useRef,
  useEffect,
  useState,
  useReducer,
} from "react";
import { IconSettings, BoxOfUsers } from "./styledMainUser";
import ShapeAvatar from "../ShapeAvatar/ShapeAvatar";
import EditProfile from "../../EditProfile/EditProfile.jsx";
import { reducer } from "../../../Reducer/Reducer";
import { useHttp } from "../../../hooks/useHttp/useHttp";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const MainUser = ({ children }) => {
  const { userName } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, { isOpen: false });

  const handlerisOpen = (e) => {
    dispatch({ type: "open" });
  };

  return (
    <>
      <div>
        <BoxOfUsers>
          <ShapeAvatar
            isuserName={true}
            indicator={true}
            nickname={userName}
            marg_l={1}
          />
          <IconSettings onClick={handlerisOpen} />
        </BoxOfUsers>
        <EditProfile isOpen={state.isOpen} handlerisOpen={handlerisOpen} />
        {children}
      </div>
    </>
  );
};

export default MainUser;
