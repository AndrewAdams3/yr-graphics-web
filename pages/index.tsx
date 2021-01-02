import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%"
  }
}))
export default function Home() {
  const classes = useStyles()
  return (<>
    <Box className={classes.root}>
      Main Content Here!
    </Box>
  </>);
}
