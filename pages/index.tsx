import Auth from "@aws-amplify/auth";
import { makeStyles, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%"
  }
}))
export default function Home() {
  const classes = useStyles()
  const showUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log("user", user)
      // console.log(await Auth.currentUserInfo())
      // console.log(await Auth.currentSession())
      console.log(await (await Auth.currentSession()).getIdToken().decodePayload())
    } catch (err) {
      console.log("current user err", err)
    }
  }
  return (<>
    <Box className={classes.root}>
      Main Content Here!
      <Button onClick={showUser} variant="outlined">Show User</Button>
    </Box>
  </>);
}
