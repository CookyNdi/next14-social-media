'use server';

import { getAllPost } from '@/data/post';

export default async function getAllPostData() {
  const post = await getAllPost();
  return post;
}
