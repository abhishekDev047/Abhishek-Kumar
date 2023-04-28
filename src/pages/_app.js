import '@/styles/globals.css';
import Navbar from './components/navbar';
import { Provider } from 'react-redux';
import Store from '@/Store';

export default function App({ Component, pageProps }) {
  return(
    <Provider store={Store}>
    <div className='flex flex-col w-full'>
    <div className='w-full'>
    <Navbar/>
    </div>
    <div className='sm:pt-16 pt-12 w-full'>
      <Component {...pageProps} />
    </div>
    </div>
    </Provider>
     )
};
