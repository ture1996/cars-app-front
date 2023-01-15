import { useEffect } from "react";
import { authService } from "../services/AuthService";

export const Logout = () => {
  useEffect(() => {
    authService.logout();
  }, []);
};
