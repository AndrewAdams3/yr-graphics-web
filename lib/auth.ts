import Auth from "@aws-amplify/auth"

export const signin = async (username: string, pass: string): Promise<boolean> => {
  try {
    if(isLoggedIn) signout();
    const user = await Auth.signIn({
      password: pass,
      username: username,
    })
    return !!user.username
  } catch (err) {
    console.log("login error", err)
    return false
  }
}

export const isLoggedIn = async (): Promise<boolean> => {
  try {
    await Auth.currentAuthenticatedUser()
    return true;
  } catch(err) {
    console.log("not logged in")
    return false
  }
}

export const signup = async (username: string, pass: string): Promise<boolean> => {
  try {
    if(isLoggedIn) signout();
    await Auth.signUp({
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

export const signout = async (): Promise<boolean> => {
  try {
    await Auth.signOut()
    return true
  } catch (err) {
    console.log("error signing out", err)
    return false
  }
}