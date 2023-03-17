import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createUser, getUsersByUsername } from '../../../../database/users';

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type RegisterResponseBody =
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
  console.log(connection.data);
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
  // 1.1-checking if the user exist.

  const user = await getUsersByUsername(connection.data.username);

  //checking the database to  (get the table)
  //and comparing if the users is already in the database

  if (user) {
    return NextResponse.json({
      errors: [
        { message: 'Email or  Username  is already taken. please try again!' },
      ],
    });
  } // 2-hash the password

  const passwordHash = await bcrypt.hash(connection.data.password, 12);
  // 3-create the user
  // 4-return the new username
  const newUser = await createUser(
    connection.data.username,
    connection.data.email,
    passwordHash,
  );

  if (!newUser) {
    return NextResponse.json(
      { errors: [{ message: 'User registration fail' }] },
      { status: 500 },
    );
  }
  return NextResponse.json({ user: { username: newUser.username } });
};
