'use server';

import { getUserByUsername } from '@/data/user';

export default async function getUserData(username: string) {
  const user = await getUserByUsername(`@${username}`);
  return user;
}
