'user server';

import { connectToDatabase } from '@/db';
import User from '@/modals/user.modal';

export const createUser = async (user: any) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
