'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page404 = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className='page404'>
      <div className='page404__center'>
        <h1>
          Page not found
          <span className='span' />
          Error 404
        </h1>
        <p>You will be redirected to the main page in 3 sec.</p>
      </div>
    </div>
  );
};

export default Page404;
