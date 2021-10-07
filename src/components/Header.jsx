import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import AppLogo from "./../assets/static/images/logo.png";

import WatchedIcon from "@material-ui/icons/BeenhereTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import "../assets/styles/components/Header.scss";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));
const Header = () => {
  const { header, logo, drawerContainer } = useStyles();
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Link to="/">
            <img src={AppLogo} alt="logo" width="48" height="48" />
          </Link>
          &nbsp;&nbsp;
          <h1>Movie Search & Keeper</h1>
          <nav>
            <ul className="header-nav-options">
              <li
                onClick={() => handleSetSection("Movies")}
                className={`header-nav-options-item ${
                  sectionActive === "Movies" ? "active" : ""
                }`}
              >
                <Link to="/">
                  <SearchIcon /> Search
                </Link>
              </li>
              <li
                onClick={() => handleSetSection("Watched")}
                className={`header-nav-options-item ${
                  sectionActive === "Watched" ? "active" : ""
                }`}
              >
                <Link to="/watched">
                  <WatchedIcon /> Watched
                </Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          className="bg-color"
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <div onClick={() => handleSetSection("Movies")}>
              <Link to="/">
                <SearchIcon /> Search
              </Link>
            </div>
            <div onClick={() => handleSetSection("Watched")}>
              <Link to="/watched">
                <WatchedIcon /> Watched
              </Link>
            </div>
          </div>
        </Drawer>
        <div>
          <Typography variant="h6" component="h1" className={logo}>
            <Link to="/">
              <img src={AppLogo} alt="logo" width="48" height="48" />
            </Link>
            &nbsp;&nbsp; Movie Search & Keeper
          </Typography>
        </div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Header;
