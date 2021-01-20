import { useEffect, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider as AuthProvider } from "next-auth/client"

import Layout from '../components/layout'
import { LayoutProvider } from '../lib/LayoutContext'

import { useRouter } from 'next/router';
import theme from '../theme/theme'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath.endsWith("#")) router.push(router.pathname); // google oauth hack
  });

  return (
    <AuthProvider session={pageProps.session}>
      <ChakraProvider resetCSS theme={theme}>
        <LayoutProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutProvider>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
