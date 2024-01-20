import { db } from '@/lib/db';
import { getUserById } from './user';

export const getAllPost = async () => {
  try {
    const post = await db.posts.findMany();
    const image = await db.postImage.findMany();

    const postIncludeImage = await Promise.all(
      post.map(async (postItem) => {
        const matchingImages = image.filter((imageItem) => imageItem.postId === postItem.id);
        const user = await getUserById(postItem.userId);
        const username = user!.username;
        const name = user!.name;
        const profileImage = user!.image;
        return {
          ...postItem,
          username,
          name,
          profileImage,
          images: matchingImages,
        };
      })
    );
    return postIncludeImage;
  } catch {
    return null;
  }
};
