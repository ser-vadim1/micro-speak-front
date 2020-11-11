import styled, { css } from "styled-components";

export const CenterV = css`
  display: flex;
  align-items: center;
`;

export const CenterH = css`
  display: flex;
  justify-content: center;
`;

export const CenterVH = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpaceBeetwenSB = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const FlexMixin = styled.div`
  /* This is an example of a nested interpolation */
  ${(props) => (props.d_flex_V ? CenterV : "")}
  ${(props) => (props.d_flex_H ? CenterH : "")};
  ${(props) => (props.d_flex_VH ? CenterVH : "")};
  ${(props) => (props.d_flex_SB ? SpaceBeetwenSB : "")};
  ${(props) => (props.d_flex_SBV ? SpaceBeetwenSB : "")};
`;
