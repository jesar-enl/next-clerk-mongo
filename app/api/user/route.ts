import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Perform your Route Handler's logic

  return NextResponse.json(
    {
      message: 'Authenticated',
      data: { userId: userId, username: user?.username },
    },
    { status: 200 }
  );
}
