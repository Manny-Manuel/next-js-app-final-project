'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginResponseBody } from '../api/(auth)/login/route';

export default function LoginForm(props: { returnTo?: string | string[] }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  return (
    <div className="container">
      <form
        className="form-register-form"
        onSubmit={async (event) => {
          event.preventDefault();

          const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
          });
          const data: LoginResponseBody = await response.json();

          if ('errors' in data) {
            setErrors(data.errors);
            return;
          }

          if (
            props.returnTo &&
            !Array.isArray(props.returnTo) &&
            // this is checking that the returnTo is valid
            // path  in our application  and not going to a different domain
            /^\/[a-zA-Z0-9-?=/]*$/.test(props.returnTo)
          ) {
            router.push(props.returnTo);
            return;
          }

          router.push(`/profile/${data.user.username}`);
        }}
      >
        {errors.map((error) => (
          <div className="div-errors-login" key={`error-${error.message}`}>
            Error: {error.message}
          </div>
        ))}
        <div className="div-bgc">
          <label htmlFor="text" className="register-top-label">
            Login{' '}
          </label>
          <br />
          <br />
          <br />

          <label htmlFor="user">
            Username:{' '}
            <input
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />
          </label>
          <br />
          <br />
          <br />

          <label htmlFor="email">
            {' '}
            Email Address:{' '}
            <input
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <br />
          </label>
          <br />
          <br />

          <label htmlFor="password">
            Password:{' '}
            <input
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </label>
          <br />
          <br />

          <button className="sign-button">Login</button>
        </div>{' '}
      </form>
    </div>
  );
}
