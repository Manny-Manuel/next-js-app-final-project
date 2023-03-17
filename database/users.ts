// getting loging information
// import { config } from 'dotenv-safe';
// to be able to connect to postgres
import { config } from 'dotenv-safe';
import { cache } from 'react';
import { sql } from './connect';

type User = {
  id: number;
  username: string;
  person_email: string;
  password_hash: string;
};

config();

export const getUsersByUsernameWithPasswordHash = cache(
  async (username: string) => {
    const [user] = await sql<User[]>`
    SELECT
      *

    FROM
      users
    WHERE

      username= ${username}
  `;
    return user;
  },
);

export const getUsersByUsername = cache(async (username: string) => {
  const [user] = await sql<{ id: number; username: string }[]>`
  SELECT
    id,
    username
  FROM
    users
    WHERE

    username= ${username}
  `;
  return user;
});

export const createUser = cache(
  async (username: string, person_email: string, passwordHash: string) => {
    const [user] = await sql<{ id: number; username: string }[]>`
    INSERT INTO users
      (username, person_email, password_hash )
    VALUES
      (${username}, ${person_email}, ${passwordHash})
    RETURNING
      id,
      username
  `;

    return user;
  },
);
