'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Link from 'next/link';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Перехожу на
        <Link href="/">главную страницу</Link> через 5 секунд...
      </p>
    </div>
  );
};

export default NotFoundPage;
