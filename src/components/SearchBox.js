'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl m-auto justify-between items-center px-3"
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search keywords..."
        className=" border-amber-600 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mr-1 placeholder-gray-500"
      />

      <button disabled={!search} type="submit" className="text-amber-500">
        Search
      </button>
    </form>
  );
}
