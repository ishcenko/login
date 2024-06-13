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
  background-color: #00008b;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;

  &.active {
    background-color: yellow;
    color: black;
  }
`;

export const ButtonLogOut = styled.button`
  width: 100px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 16px;
  color: black;
  background-color: #05b6f6;

  &:hover {
    color: #fff;
    background-color: #210b8e;
  }
  &:focus {
    color: red;
    background-color: #14ddaa;
  }
`;
