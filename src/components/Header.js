import React from "react";
import PropTypes from "prop-types";
import {
  withStyles as HeaderWithStyles,
  createStyleSheet
} from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import { Link } from "react-router-dom";

const styleSheet = createStyleSheet("ButtonAppBar", {
  root: {
    marginTop: -6,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  button: {
    color: "white"
  }
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Park App
          </Typography>
          <Button>
            <Link to="/" className={classes.button}>
              Home
            </Link>
          </Button>
          <Button>
            <Link to="/login" className={classes.button}>
              Login
            </Link>{" "}
          </Button>
          <Button>
            <Link to="/reservation" className={classes.button}>
              Reservation
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default HeaderWithStyles(styleSheet)(ButtonAppBar);

// color="contrast"
// color="contrast"
// color="contrast"
