/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center">
      <img className="h-96" src="/spinner.svg" alt="loading..."></img>
    </div>
  );
}
