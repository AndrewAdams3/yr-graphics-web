import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import HeadComponent from './Head'
import Header from './Header';
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor: theme.palette.grey[600],
    color: "white",
    textAlign: "center",
  },
  main: {
    minHeight: "80vh"
  }
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles()
  return (<>
    <HeadComponent />
    <Header />
    <Box component="main" className={classes.main}>{children}</Box>
    <Footer />
  </>)
}

export default Layout