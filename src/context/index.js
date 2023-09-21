import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { auth } from '../services/_config';

export default function Auth({ children }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/');
      }else{
        router.push('/gallery')
      }
    });

    return () => unsubscribe();
  }, [router]);

  return children;
}
