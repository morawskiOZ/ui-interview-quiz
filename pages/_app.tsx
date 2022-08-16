import { CacheProvider, css, EmotionCache, Global } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query'
import emotionReset from 'emotion-reset'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { DefaultLayout } from '../src/components/@Shared/DefaultLayout'
import createEmotionCache from '../src/createEmotionCache'
import theme from '../src/theme'
import { AppPropsWithLayout } from './types'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { reset } = useQueryErrorResetBoundary()
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error: any, query) => {
            if (query.state.data !== undefined) {
              console.error(`Something went wrong: ${error.message}`)
            }
          },
        }),
        defaultOptions: {
          queries: {
            retry: 1,
            suspense: true,
          },
        },
      })
  )
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  )
}
