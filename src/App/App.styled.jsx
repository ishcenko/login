import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  margin-top: 36px;
  color: aliceblue;
  font-size: 22px;
  padding: 15px 22px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: darkblue;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;

  &.active {
    background-color: yellow;
    color: black;
  }
`;
