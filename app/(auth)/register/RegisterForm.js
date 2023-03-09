'use client';
export default function RegisterForm() {
  return (
    <div className="container">
      <form className="form-register-form">
        <fieldset className="fieldset-bgc">
          <label htmlFor="text" className="register-top-label">
            {' '}
            REGISTER
          </label>
          <br />
          <br />
          <br />
          <label htmlFor="user">
            Username: <input />
          </label>
          <br />
          <br />

          <label htmlFor="email">
            Email: <input />
          </label>
          <br />
          <br />

          <label htmlFor="password">
            Password: <input />
          </label>
          <br />
          <br />

          <button className="sign-button">Sign in</button>
        </fieldset>{' '}
      </form>
    </div>
  );
}
