import React from 'react';
import Amplify, { withSSRContext } from 'aws-amplify';

import awsExports from '@/lib/amp'
Amplify.configure({ ...awsExports, ssr: true })

const AdminHome: React.FC = (props) => {

  return (
    <div>
      {JSON.stringify(props)}
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const { Auth } = withSSRContext({ req })

  try {
    console.log(await Auth.currentSession())
    const user = await Auth.currentAuthenticatedUser()
    console.log("logged in!", user)
    return {
      props: user
    }
  } catch (err) {
    console.log("err", err)
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

};
export default AdminHome