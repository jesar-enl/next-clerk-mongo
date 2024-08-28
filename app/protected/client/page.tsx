"use client";

import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function ClientPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="container">
        <h1 className="text-2xl font-semibold">This is a Client Page</h1>
        <p className="mt-4">Welcome, {user?.fullName}!</p>
      </div>
    </section>
  );
}
