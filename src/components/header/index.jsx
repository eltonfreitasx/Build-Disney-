import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "./../../assets/images/logo.svg";
import homeIcon from "./../../assets/images/home-icon.svg";
import searchIcon from "./../../assets/images/search-icon.svg";
import watchList from "./../../assets/images/watchlist-icon.svg";
import originals from "./../../assets/images/original-icon.svg";
import movies from "./../../assets/images/movie-icon.svg";
import series from "./../../assets/images/series-icon.svg";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from "../../services/features/users/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const singInGoogle = () => {
    if (!userName) {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        //const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        //const errorCode = error.code;
        //const email = error.email;
        //const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }else if (userName) {
    auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
  }}

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="disney" />
      </Logo>

      {!userName ? (
        <Login onClick={singInGoogle}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link href="/home">
              <img src={homeIcon} alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link>
              <img src={searchIcon} alt="SEARCH" />
              <span>SEARCH</span>
            </Link>
            <Link>
              <img src={watchList} alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </Link>
            <Link>
              <img src={originals} alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </Link>
            <Link>
              <img src={movies} alt="MOVIES" />
              <span>MOVIES</span>
            </Link>
            <Link>
              <img src={series} alt="SERIES" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <SingOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={singInGoogle}>Sign out</span>
            </DropDown>
          </SingOut>
        </>
      )}
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

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19,19,19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity:0;
`

const SingOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`

export default Header;
