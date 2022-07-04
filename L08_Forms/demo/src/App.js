function App() {
  const loginSubmitHandler = (ev) => {
    ev.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(ev.currentTarget));

    const user = {
      email,
      password
    }

    localStorage.setItem('user', JSON.stringify(user));

    ev.target.reset();
  }

  return (
    <div>
      <form onSubmit={loginSubmitHandler} id="login-form" action="" method="POST">
        <fieldset>
          <legend>Login Form</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input type="text" name="email" id="email" placeholder="Email" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input type="password" name="password" id="password" placeholder="Password" />
            </span>
          </p>
          <input className="button submit" type="submit" defaultValue="Login" />
        </fieldset>
      </form>
    </div>
  );
}

export default App;