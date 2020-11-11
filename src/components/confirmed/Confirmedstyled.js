import styled from "styled-components";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";

export const Container = styled.div`
  margin-top: 50px;
  margin: 0 auto;
  max-width: 810px;
  height: 315px;
  padding: 60px, 30px;
  background-color: #fffbf0;
  border: 1px solid black;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 315px;
`;

export const Close = styled(CancelIcon)``;
export const BattonBackChat = styled.button`
  color: white;
  outline: none;
  border: none;
  max-width: 155px;
  height: 40px;
  padding: 11px, 30px;
  background-color: #6495ed;
`;

export const LinkBack = styled(Link)`
  text-align: center;
  vertical-align: center;
  color: white;
  outline: none;
  border: none;
  width: 155px;
  height: 40px;
  padding: 20px, 30px;
  background-color: #6495ed;
  text-decoration: none;
`;
