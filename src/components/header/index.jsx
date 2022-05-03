import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./../../assets/images/logo.svg";
import homeIcon from "./../../assets/images/home-icon.svg";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo disney" />
      </Logo>
      <NavMenu>
        <a href="/">
          <img src={homeIcon} alt="home Icon"/>
        </a>
        <span to="/">HOME</span>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.div`
  padding: 0;
  width: 88px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0px;
  margin: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  span{
      cursor: pointer;
  }

 /* @media (max-width: 768px) {
    display: none;
  }*/
`;

export default Header;
