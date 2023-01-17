import { useState } from "react";
import { RegisterDetails } from "../components/RegisterDetails";
import { authService } from "../services/AuthService";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password || !credentials.name) {
      alert("Bad credentials");
      return;
    }
    await authService.register(credentials);
  };

  return (
    <RegisterDetails
      credentials={credentials}
      handleOnChange={(e) => changeHandler(e)}
      handleSubmit={(e) => submitHandler(e)}
    />
  );
};
