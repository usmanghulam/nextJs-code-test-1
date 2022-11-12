import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { wrapper, store } from "../reducer";
import { Provider } from "react-redux";

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
