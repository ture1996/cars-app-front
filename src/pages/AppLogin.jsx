import { useState } from "react";
import { LoginDetails } from "../components/LoginDetails";
import { authService } from "../services/AuthService";

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Bad credentials");
      return;
    }
    await authService.login(credentials);
  };

  return (
    <LoginDetails
      credentials={credentials}
      handleOnChange={(e) => changeHandler(e)}
      handleSubmit={(e) => submitHandler(e)}
    />
  );
};
