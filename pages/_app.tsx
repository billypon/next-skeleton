import NextApp from 'next/app'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import { Provider } from 'react-redux/es'
import withRedux, { NextJSAppContext, AppProps } from 'next-redux-wrapper/es6'
import '@billypon/react-utils/axios'

import { initializeStore } from '~/utils/redux'

import '~/styles/index.less'
import '~/styles/index.styl'
import '~/icons'

class App extends NextApp<AppProps> {
  static async getInitialProps({ Component, ctx }: NextJSAppContext) {
    const pageProps = await loadGetInitialProps(Component, ctx)
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={ store }>
        <Component { ...pageProps } />
      </Provider>
    )
  }
}

export default withRedux(initializeStore)(App)
