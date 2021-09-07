import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Box,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import SearchField from "./SearchField";
import AusMap from "./AusMap";

import bg from "../assets/images/bg2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  rootSmall: {
    backgroundImage: "none",
    display: "block",
  },
  mainDiv: {
    width: "80%",
    height: "max-content",
    marginTop: "75px",
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "50px",
    },
  },
  buyBtn: {
    borderRadius: "6px 6px 0 0",
  },
  rentBtn: {
    borderRadius: "6px 6px 0 0",
    marginLeft: "3px",
  },
  filterContainer: {
    display: "flex",
    background: "#00000040",
    padding: "40px 20px",
    height: "500px",
    justifyContent: "space-between",
  },
  smallScreenfilterContainer: {
    flexDirection: "column",
    background: "#b2b2b2",
  },
  filterContainerLeft: {
    minWidth: "100% !important",
  },
  smallScreenDropdownDiv: {
    display: "flex",
    flexDirection: "column",
  },
  searchDropdown: {
    minWidth: 130,
    margin: "8px 6px 6px 0",
    "& .MuiInputBase-root": {
      background: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: 100,
    },
  },
  selectLabel: {
    color: "#fff",
  },
  moreLink: {
    display: "flex",
    alignItems: "center",
    color: "#fae60a",
    "&:hover": {
      borderBottom: "none",
      color: "#ebd80d",
    },
    "& .MuiSvgIcon-root": {
      marginLeft: "5px",
    },
  },
  upArrowIcon: {
    transform: "rotate(180deg)",
  },
  mapContainer: {
    height: "250px",
    "& svg": {
      maxHeight: "90%",
      "& path:hover": {
        fill: theme.palette.primary.main,
      },
    },
  },
  topMapDiv: {
    display: "none",
  },
  topMapDivSmall: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    width: " 100%",
    height: "fit-content",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    "& path:hover": {
      fill: theme.palette.primary.main,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    min: "",
    max: "",
  });

  const [showMore, setShowMore] = useState(false);

  const smallScreen = useMediaQuery("(max-width:768px)");

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Grid
      container
      justifyContent="center"
      className={clsx(classes.root, smallScreen && classes.rootSmall)}
    >
      <Box
        className={clsx(
          classes.topMapDiv,
          smallScreen && classes.topMapDivSmall
        )}
      >
        <AusMap />
      </Box>
      <Box className={classes.mainDiv}>
        <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.buyBtn}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.rentBtn}
          >
            Buy
          </Button>
        </Box>
        <Collapse in={showMore} collapsedSize={smallScreen ? 350 : 300}>
          <Box className={classes.filterContainer}>
            <Grid
              item
              xs={9}
              className={smallScreen ? classes.filterContainerLeft : ""}
            >
              <SearchField label="Search by Suburb, address, property name" />
              <Box mt={3}>
                <FormLabel component="legend" className={classes.selectLabel}>
                  Search by:
                </FormLabel>
                <Box
                  className={smallScreen ? classes.smallScreenDropdownDiv : ""}
                >
                  <FormControl
                    variant="outlined"
                    className={classes.searchDropdown}
                    size="small"
                  >
                    <InputLabel>Min:</InputLabel>
                    <Select
                      label="Min"
                      value={state.min}
                      name="min"
                      onChange={handleSelect}
                    >
                      <MenuItem value={5000}>$5,000</MenuItem>
                      <MenuItem value={10000}>$10,000</MenuItem>
                      <MenuItem value={20000}>$20,000</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    className={classes.searchDropdown}
                    size="small"
                  >
                    <InputLabel>Max:</InputLabel>
                    <Select
                      label="Max"
                      value={state.max}
                      name="max"
                      onChange={handleSelect}
                    >
                      <MenuItem value={5000}>$50,000</MenuItem>
                      <MenuItem value={10000}>$100,000</MenuItem>
                      <MenuItem value={20000}>$200,000</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                <Link
                  href="#"
                  className={classes.moreLink}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? (
                    <>
                      <Typography variant="body1">Less</Typography>
                      <ArrowDropDownCircleIcon
                        className={classes.upArrowIcon}
                      />
                    </>
                  ) : (
                    <>
                      <Typography variant="body1">More</Typography>
                      <ArrowDropDownCircleIcon />
                    </>
                  )}
                </Link>
              </Box>
            </Grid>
            <Grid
              sx={2}
              className={classes.mapContainer}
              style={{ display: smallScreen ? "none" : "block" }}
            >
              {/* <img src={AUS_MAP}/> */}
              <AusMap />
            </Grid>
          </Box>
        </Collapse>
      </Box>
    </Grid>
  );
};

export default Home;
