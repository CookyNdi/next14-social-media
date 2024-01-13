import { UserRole } from '@prisma/client';

export type User = {
  id: string;
  name: string | null;
  username: string | null;
  email: string;
  bio: string | null;
  banner_image: string | null;
  image: string | null;
  role: UserRole;
  emailVerified: Date | null;
  isTwoFactorEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
};
