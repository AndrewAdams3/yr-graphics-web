import {Auth} from "aws-amplify"

type userAuthParams = {
  username: string,
  pass: string
  auth?: any
}
export const signin = async ({username, pass, auth = Auth}): Promise<boolean> => {
  try {
    if(isLoggedIn(auth)) signout();
    const user = await auth.signIn({
      password: pass,
      username: username,
    })
    return !!user.username
  } catch (err) {
    console.log("login error", err)
    return false
  }
}

export const isLoggedIn = async (auth): Promise<boolean> => {
  try {
    console.log("checking logged in")
    const user = await auth.currentAuthenticatedUser()
    console.log("logged in", user)
    return true;
  } catch(err) {
    console.log("not logged in")
    return false
  }
}

export const signup = async ({username, pass, auth = Auth}: userAuthParams): Promise<boolean> => {
  try {
    if(isLoggedIn(auth)) signout();
    await auth.signUp({
      password: pass,
      username: username,
      attributes: {}
    })
    return true
  } catch (err) {
    console.log("error signing up", err)
    return false
  }
}

export const signout = async (auth = Auth): Promise<boolean> => {
  try {
    await auth.signOut()
    return true
  } catch (err) {
    console.log("error signing out", err)
    return false
  }
}