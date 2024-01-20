import { PostStatus } from '@prisma/client';

export type postDataType = {
  images: {
    id: string;
    postId: string;
    image_url: string;
    createdAt: Date;
  }[];
  id: string;
  userId: string;
  content: string;
  likes: number;
  type: string;
  respost_count: number;
  view: number;
  status: PostStatus;
  scheduled: Date | null;
  is_repost: boolean;
  repost_id: string | null;
  profileImage: string | null;
  username: string | null;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
};
