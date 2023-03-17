import { notFound } from 'next/navigation';
import { getUsersByUsername } from '../../../database/users';

// Getting the username from the browser with params
type Props = { params: { username: string } };

export default async function UserProfile({ params }: Props) {
  const user = await getUsersByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <>
      <h1>{user.username}</h1>;
    </>
  );
}
