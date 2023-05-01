'use client';
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, params }) {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        href={`/?genre=${params}`}
        className={`m-2 hover:text-amber-600 font-semibold ${
          genre &&
          genre === params &&
          'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
