import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'
import Amplify from 'aws-amplify'

import amplifyConfig from '../../lib/amp'
import { signin, signout, signup } from '../../lib/auth'

Amplify.configure({ ...amplifyConfig, ssr: true })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    margin: "auto",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    fontWeight: "bold"
  },
  toolBar: {
    display: 'flex',
    justifyContent: "space-between"
  },
  leftButtons: {
  },
  rightButtons: {

  },
  authButton: {
    borderColor: theme.palette.common.white,
    marginLeft: ".5rem"
  }
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter()

  const navigate = (path: string) => {
    router.push(path)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftButtons}>
            <Button onClick={() => navigate("/shop")}>Shop</Button>
            <Button onClick={() => navigate("/admin")}>Admin</Button>
            <Button>About Us</Button>
            <Button>Contact</Button>
          </div>
          <span className={classes.titleContainer}>
            <Typography variant="h6" className={classes.title}>
              EcoGraphicPrints
            </Typography>
          </span>
          <span className={classes.rightButtons}>
            <Button>Get Involved?</Button>
            <Button onClick={() => signin({ username: "andydrew313@gmail.com", pass: "Anda31399pand@" })} variant="outlined" className={classes.authButton}>Sign In</Button>
            <Button onClick={() => signout()} variant="outlined" className={classes.authButton}>Sign Out</Button>
            <Button onClick={() => signup({ username: "andydrew313@gmail.com", pass: "Anda31399pand@" })} variant="outlined" className={classes.authButton}>Sign Up</Button>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
