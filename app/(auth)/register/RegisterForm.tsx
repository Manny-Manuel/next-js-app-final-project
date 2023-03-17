'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBody } from '../../api/(auth)/register/route';

export default function RegisterForm(props: { returnTo?: string | string[] }) {
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

          const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
          });
          const data: RegisterResponseBody = await response.json();

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

          router.push('/');
        }}
      >
        {errors.map((error) => (
          <div className="div-errors-register" key={`error-${error.message}`}>
            Error: {error.message}
          </div>
        ))}
        <div className="div-bgc">
          <label htmlFor="text" className="register-top-label">
            {' '}
            Sign in
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

          <button className="sign-button">Register</button>
        </div>{' '}
      </form>
    </div>
  );
}
