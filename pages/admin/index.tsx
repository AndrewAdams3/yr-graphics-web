import { GetServerSideProps } from 'next'
import Amplify, { withSSRContext, Auth } from "aws-amplify";

import amplifyConfig from '../../lib/amp'
import { Button } from '@material-ui/core';
Amplify.configure({ ...amplifyConfig, ssr: true })

const AdminHome: React.FC = ({ ok }) => {
  const showUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log("user", user)
    } catch (err) {
      console.log("current user err", err)
    }
  }

  return (
    <div>
      admin {ok ? "yes" : "no"}
      <Button onClick={showUser}>show user</Button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Auth } = withSSRContext(ctx)
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log("user", user)
    return {
      props: {
        ok: true
      }
    }
  } catch (err) {
    console.log("auth", err)
    return {
      props: {
        ok: false
      }
      // redirect: {
      //   permanent: false,
      //   destination: "/",
      // }
    }
  }
}
export default AdminHome