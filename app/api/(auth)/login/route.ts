import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getUsersByUsernameWithPasswordHash } from '../../../../database/users';

const userSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export type LoginResponseBody =
  | { errors: { message: string }[] }
  | { user: { username: string } };

export const POST = async (request: NextRequest) => {
  // registering a user
  // 0- check if the data are correct
  const body = await request.json();
  const connection = userSchema.safeParse(body);

  if (!connection.success) {
    return NextResponse.json(
      {
        errors: connection.error.issues,
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
        errors: [
          {
            message:
              'Username, Password or Email is incorrect. Please try again!',
          },
        ],
      },
      { status: 400 },
    );
  }

  // 1- check if the user exit in database

  const userWithPasswordHash = await getUsersByUsernameWithPasswordHash(
    connection.data.username,
  );

  // here we check if the user exist, if not exist it means it not in our data record
  if (!userWithPasswordHash) {
    return NextResponse.json(
      { errors: [{ message: 'User or password not found' }] },
      { status: 401 },
    );
  }

  // 2- if the user exist we  validate the password
  const isPasswordValid = await bcrypt.compare(
    connection.data.password,
    userWithPasswordHash.password_hash,
  ); // return a boolean
  console.log(isPasswordValid);

  if (!isPasswordValid) {
    return NextResponse.json(
      { errors: [{ message: 'Password is not valid' }] },
      { status: 401 },
    );
  }

  return NextResponse.json({
    user: { username: userWithPasswordHash.username },
  });
};
