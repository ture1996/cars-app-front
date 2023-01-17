export const RegisterDetails = ({ credentials, handleOnChange, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleOnChange}
        />
        <br />
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