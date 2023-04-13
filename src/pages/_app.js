import '@/styles/globals.css';
import Navbar from './components/navbar';

export default function App({ Component, pageProps }) {
  return(
    <div className='flex flex-col'>
    <div>
    <Navbar/>
    </div>
    <div className='mt-12'>
      <Component {...pageProps} />
    </div>
    </div>
    
     )
};
