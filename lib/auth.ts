import { Auth } from 'aws-amplify';

type authCreds = {
  username: string,
  password: string
}
export async function signUp({username, password}) {
    try {
      if(isLoggedIn()) signOut();
      const { user } = await Auth.signUp({
          username,
          password,
      });
      console.log(user);
      return true
    } catch (error) {
        console.log('error signing up:', error);
        return false
    }
}

export async function signIn({username, password}: authCreds) {
  try {
    if(isLoggedIn()) signOut();
    const user = await Auth.signIn(username, password);
    return user
  } catch (error) {
    console.log('error signing in', error);
    return null
  }
}

export async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export async function isLoggedIn() {
  try {
    await Auth.currentAuthenticatedUser()
    return true
  } catch(err) {
    return false
  }
}

