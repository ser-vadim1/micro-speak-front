import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${(props) => (props.whiteColor ? "white" : "#900020")};
  }

`;
