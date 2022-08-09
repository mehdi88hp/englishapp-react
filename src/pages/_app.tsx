import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import type { NextPage } from 'next'
import { store } from '../../store'
import { Provider } from 'react-redux'

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

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// export default MyApp
