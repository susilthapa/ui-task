import React, { useState } from "react";
import { makeStyles, Grid, Typography, Box, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import BaseRouter from "../routes";
import "../assets/css/Navbar.css";

const useStyles = makeStyles((theme) => ({
  navRoot: {
    zIndex: 9999,
    padding: " 0 40px",
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    top: 0,
    height: "80px",
    backgroundColor: "#fae60a",
    "& a": {
      color: "#533dbf",
    },
  },
  navLinksDiv: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    "& li": {
      width: "max-content",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {},
    },
    "& a": {
      color: "#533dbf",
      fontSize: "19px",
      borderBottom: "2px solid transparent",
      transition: "border 0.2s ease-in",
      "&:hover": {
        borderBottom: "2px solid #533dbf",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
      flexDirection: "column",
    },
  },

  active: {
    borderBottom: "2px solid #533dbf !important",
  },
  logoDiv: {
    display: "flex",
    justifyContent: "flex-end",
    "& h6": {
      lineHeight: 1,
      fontSize: "22px",
      fontWeight: "600",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  },
  navBtnDiv: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginLeft: "0",
    },
  },
  navBtn: {
    fontSize: "17px",
    borderRadius: "25px",
    margin: "4px",
    padding: "6px 15px",
    "& .MuiButton-startIcon": {
      marginLeft: "0",
      marginRight: "4px",
      "& .MuiSvgIcon-root": {
        fontSize: "25px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      padding: "5px 10px",
    },
  },

  mainContainer: {
    marginTop: "80px",
    maxWidth: "100%",
    overflowX: "hidden",
    display: "flex",
    height: "calc(100vh - 80px)",
  },
  drawer: {
    "& .MuiPaper-root": {
      padding: "20px",
      backgroundColor: "#fae60a",
    },
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid container className={classes.navRoot} id="navRoot">
        <Grid item xs={1} lg={2} className={classes.logoDiv}>
          <Link to="#">
            <Typography variant="h6">LOGO</Typography>
            <Typography variant="h6">HERE</Typography>
          </Link>
        </Grid>
        <Grid item xs={11} lg={10} className={classes.navLinksDiv}>
          <List className={classes.navLinks}>
            <ListItem>
              <Link
                className={location.pathname === "/" ? classes.active : ""}
                to="/"
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#">Buy</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Rent</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Gallery</Link>
            </ListItem>
            <ListItem>
              <Link to="#">About Us</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Careers</Link>
            </ListItem>
            <Box display="flex" ml={3} className={classes.navBtnDiv}>
              <Button
                variant="contained"
                color="primary"
                className={classes.navBtn}
                startIcon={<PersonIcon />}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.navBtn}
              >
                Market Apprisal
              </Button>
            </Box>
          </List>
        </Grid>
        <IconButton
          edge="end"
          onClick={() => setOpen(!open)}
          className={classes.menuIcon}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Grid>
      <main className={classes.mainContainer} id="mainContainer">
        <BaseRouter />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <List className={classes.navLinks}>
            <ListItem>
              <Link
                className={location.pathname === "/" ? classes.active : ""}
                to="/"
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#">Buy</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Rent</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Gallery</Link>
            </ListItem>
            <ListItem>
              <Link to="#">About Us</Link>
            </ListItem>
            <ListItem>
              <Link to="#">Careers</Link>
            </ListItem>
            <Box display="flex" ml={3} className={classes.navBtnDiv}>
              <Button
                variant="contained"
                color="primary"
                className={classes.navBtn}
                startIcon={<PersonIcon />}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.navBtn}
              >
                Market Apprisal
              </Button>
            </Box>
          </List>
        </Drawer>
      </main>
    </>
  );
};

export default Navbar;
