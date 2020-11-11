import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

export const RowIcon = styled(ArrowForwardIosIcon)`
  color: white;
  transform: translate(10%, 25%);

  &:hover {
    color: rgb(0, 126, 165);
    text-shadow: 0 0 10px rgb(0, 126, 165);
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  text-align: center;
  width: 700px;
  height: 600px;
  margin: 0 auto;
  margin-top: 5%;
  border: 1px solid black;
  background-color: #ffdab9;
  -webkit-box-shadow: 10px 0px 11px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 0px 11px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 0px 11px -4px rgba(0, 0, 0, 0.75);
`;

export const FormSignin = styled.form`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* font-family: "Titillium Web", sans-serif; */
  font-family: "Domine", serif;
`;

export const InputEmail = styled.input`
  color: white;
  position: relative;
  padding-left: 20px;
  height: 70px;
  background: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
  border-radius: 8px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 0;
  outline: 0;
  top: -2px;
  font-weight: 700;
  &:focus {
    color: rgb(255, 255, 255);
  }
  &:before {
    position: absolute;
    display: block;
    height: 22px;
    width: 10%;
    background: red;
    content: "";
    top: 0;
    left: 0;
  }
`;
export const InputNick = styled(InputEmail)`
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const InputPassword = styled(InputEmail)`
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const BattonSubmit = styled.button`
  background: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(28, 30, 33); /*Prevent yellow autofill color*/
  color: rgb(52, 56, 61);
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  outline: 0;
  top: 40%;
  transform: translateY(-50%);
  right: -24px;
  border: 6px solid rgb(52, 56, 61);
  font-size: 25px;
  padding-bottom: 5px;
`;
export const P = styled.p`
  padding-bottom: 10px;
  padding-left: 20px;
  text-align: left;
`;
export const P_error = styled.p`
  /* padding-bottom: 10px; */
  display: inline-block;
  margin-left: 20px;
  text-align: left;
  border-bottom: 1px solid #bf3030;
`;
export const LinkLoginUp = styled(Link)`
  text-decoration: none;
  color: #bf3030;
`;

export const BoxOfP = styled.div`
  width: 500px;
  text-align: left;
  border-radius: 8px;
  margin-top: -3px;
  padding-bottom: 20px;
  color: white;
  border-top: 2px solid white;
  background-color: rgb(28, 30, 33);
`;

export const LinkSignIn = styled(Link)`
  text-decoration: none;
  color: #bf3030;
`;
