import * as React from 'react';
import { ImSpinner5 } from 'react-icons/im';

export default function Layout({ children }) {
  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => {
    setRendered(true);
  }, []);

  return rendered ? (
    <>{children}</>
  ) : (
    <div className='fixed inset-0 flex flex-col items-center justify-center gap-2 bg-white'>
      <div>
        <ImSpinner5 className='w-12 h-12  animate-spin' />
      </div>
      <p>Mohon Menunggu...</p>
    </div>
  );
}
