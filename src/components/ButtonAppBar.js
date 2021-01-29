import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import "./Button.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div className="appbar">
          <Link to="/home" variant="body2">
            <Typography variant="h4" className={classes.title}>
              Home
            </Typography>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}
