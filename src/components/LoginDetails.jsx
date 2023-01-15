export const LoginDetails = ({ credentials, handleOnChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={credentials.email}
        onChange={handleOnChange}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleOnChange}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};
