'use server';

import { db } from '@/lib/db';
import { currentUser } from '@/lib/helpers/auth';
import { PostStatus } from '@prisma/client';

export default async function createPost(content: string, image?: string | null) {
  const user = await currentUser();

  if (!user) return console.log('ERROR AUTH');

  const post = await db.posts.create({
    data: {
      userId: user.id,
      content,
      status: PostStatus.POSTED,
    },
  });

  if (post && image) {
    await db.postImage.create({
      data: {
        postId: post.id,
        image_url: image,
      },
    });
  }

  return console.log('POST CREATED');
}
