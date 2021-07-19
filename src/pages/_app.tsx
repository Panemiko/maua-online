import type { AppProps } from 'next/app'
import { Fragment } from 'react'

import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Component {...pageProps} />
            <GlobalStyle />
        </Fragment>
    )
}
