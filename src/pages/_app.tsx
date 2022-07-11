import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// function MyApp({ Component, pageProps }: AppProps) {
//
//
//   return (
//
//   <Component {...pageProps} />
//
//   )
// }

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

// export default MyApp
