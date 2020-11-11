import styled from "styled-components";
import Icon from "@material-ui/icons/SearchOutlined";

export const Box = styled.div`
  margin-top: 20px;
`;

export const Container_search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  width: 325px;
  height: 37px;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const SearchIcon = styled(Icon)`
  color: white;
  margin-left: 15px;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  color: white;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  background-color: transparent;
  caret-color: black;
  &::placeholder {
    color: white;
  }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
