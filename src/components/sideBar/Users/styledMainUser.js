import styled from "styled-components";
import Icon from "@material-ui/icons/SettingsOutlined";
export const IconSettings = styled(Icon)`
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;
`;

export const BoxOfUsers = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  &:hover {
    background-color: white;
    color: #900020;
  }
`;
