import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
}));

import "./styles.css";

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Meat Calculator
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <main >
     

      </main>
      <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          className={classes.stickToBottom}
          variant="fullWidth"
          
        >
          <Tab label="Item One" icon={<PhoneIcon />} />
          <Tab label="Item Two" icon={<FavoriteIcon />} />
          <Tab label="Item Three" icon={<PersonPinIcon />} />
          <Tab label="Item Four" icon={<HelpIcon />} />
          <Tab label="Item Five" icon={<ShoppingBasket />} />
          
        </Tabs>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
