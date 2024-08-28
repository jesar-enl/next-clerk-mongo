import { UserProfile } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Profile() {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    redirect('/');
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center border">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {user?.fullName}&#39;s Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about {user?.fullName}.
        </p>
      </div>
      <div className="mb-3">
        <UserProfile />
      </div>
    </div>
  );
}
