import React from 'react'
import HeadComponent from './Head'
import Header from './Header';
import Footer from './Footer'
import { Flex } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => {
  return (<>
    <HeadComponent />
    <Flex
      direction="column"
      align="center"
      bg="green.200"//"#3ea76a6b"
    >
      <Header />
      {children}
      {/* <Footer /> */}
    </Flex>
  </>)
}

export default Layout