import Context from '@/context/context';
import { store } from '@/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Context>
  );
}
