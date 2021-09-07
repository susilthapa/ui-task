import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    borderRadius: "7px",
    "& .MuiFormControl-fullWidth": {
      width: "fit-content",
    },
  },
  smallScreenRootStyle: {
    flexDirection: "column",
    backgroundColor: "transparent",
    "& .MuiInputBase-root": {
      background: "#fff",
      width: "100%",
      borderRadius: "3px",
    },
    "& button": {
      width: "100%",
      borderRadius: "3px",
      marginTop: "10px",
    },
  },
  searchInput: {
    color: "rgba(0, 0, 0, 0.7)",
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: "5px",
    borderRadius: "7px",
  },
  divider: {
    height: 28,
    margin: 1,
  },
  searchBtn: {
    marginLeft: "5px",
    paddingTop: "9px",
    paddingBottom: "9px",
    boxShadow: "none",
    borderRadius: "0 6px 6px 0",
  },
}));

export default function SearchField(props) {
  const { label } = props;
  const classes = useStyles();

  const smallScreen = useMediaQuery("(max-width:768px)");

  return (
    <Paper
      component="form"
      className={clsx(
        classes.root,
        smallScreen && classes.smallScreenRootStyle
      )}
    >
      <InputBase className={classes.searchInput} placeholder={label} />
      <Button
        variant="contained"
        color="primary"
        className={classes.searchBtn}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Paper>
  );
}
