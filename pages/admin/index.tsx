import React from 'react';
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth';

const AdminHome: React.FC<IProps> = ({ session }) => {

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}

interface IProps {
  session: Session
}
export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: "false",
      }
    }
  }



  return {
    props: { session }
  }
};
export default AdminHome