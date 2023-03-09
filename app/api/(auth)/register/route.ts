import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type RegisterResponseBody =
  | { error: { message: string }[] }
  | { user: { username: string } }
  | { email: { email: string } };

export const POST = async (request: NextRequest) => {
  // registering a user
  // 0- check if the data are correct
  const body = await request.json();
  const connection = userSchema.safeParse(body);

  if (!connection.success) {
    return NextResponse.json(
      {
        error: connection.error.issues,
      },

      { status: 400 },
    );
  }

  if (
    !connection.data.username ||
    !connection.data.password ||
    !connection.data.email
  ) {
    return NextResponse.json(
      {
        error: [
          {
            message:
              'Password, Username or Email is incorrect. Please try again!',
          },
        ],
      },
      { status: 400 },
    );
  }
  // 1- check if the string is empty
  if (
    !connection.data.username ||
    !connection.data.password ||
    !connection.data.email
  ) {
    return NextResponse.json(
      { errors: [{ message: 'Username, Password o email is empty' }] },
      { status: 400 },
    );
  }
  // 1.1-compare the username with the database (get the table)

  // 2-hash the password
  // 3-create the user
  // 4-return the new username
};
