import { useEffect, useState } from 'react'
import { ThemeProvider, useMediaQuery } from '@material-ui/core'
import CssBaseline from "@material-ui/core/CssBaseline";

import Layout from '../components/layout'

import { LayoutProvider } from '../lib/LayoutContext'

import { getTheme } from '../theme/theme'

import '../theme/global.css'

import configureAmp from '../lib/amp'
configureAmp()

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode)

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <ThemeProvider theme={getTheme(false)}>
      <CssBaseline />
      <LayoutProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutProvider>
    </ThemeProvider>
  )
}

export default MyApp
