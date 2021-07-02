import '@/styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Toaster
          reverseOrder={false}
          position='bottom-right'
          toastOptions={{
            style: {
              borderRadius: '8px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
