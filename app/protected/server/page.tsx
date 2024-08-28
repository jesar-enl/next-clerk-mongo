import { currentUser } from '@clerk/nextjs/server';

export default async function ServerPage() {
  const user = await currentUser();

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="container">
        <h1 className="text-2xl font-semibold">This is a Server Page</h1>
        <p className="mt-4">Welcome, {user?.fullName}!</p>
      </div>
    </section>
  );
}
