import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./../../assets/images/logo.svg";

import homeIcon from "./../../assets/images/home-icon.svg";
import searchIcon from "./../../assets/images/search-icon.svg";
import watchList from "./../../assets/images/watchlist-icon.svg";

import originals from "./../../assets/images/original-icon.svg";
import movies from "./../../assets/images/movie-icon.svg";
import series from "./../../assets/images/series-icon.svg";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo disney" />
      </Logo>
      <NavMenu>
        <Link to="/">
          <img src={homeIcon} alt="home Icon" />
          <span to="/">HOME</span>
        </Link>
        <Link to="/">
          <img src={searchIcon} alt="home Icon" />
          <span to="/">SEARCH</span>
        </Link>
        <Link to="/">
          <img src={watchList} alt="home Icon" />
          <span to="/">WATCHLIST</span>
        </Link>
        <Link to="/">
          <img src={originals} alt="home Icon" />
          <span to="/">ORIGINALS</span>
        </Link>
        <Link to="/">
          <img src={movies} alt="home Icon" />
          <span to="/">MOVIES</span>
        </Link>
        <Link to="/">
          <img src={series} alt="home Icon" />
          <span>SERIES</span>
        </Link>
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
  margin: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.88;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /*@media (max-width: 768px) {
    display: none;
  }*/
`;

export default Header;
