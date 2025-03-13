import { z } from 'zod';

// Login validation schema
export const schema = {
  login: z.object({
    username: z
      .string()
      .min(2, 'Username must be at least 2 characters')
      .max(50, 'Username must not exceed 15 characters')
      .regex(
        /^[a-zA-Z0-9_-]+$/,
        'Usernames can only contain letters, digits, dashes and underscores'
      ),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(50, 'Password must not exceed 72 characters'),
  }),
};
