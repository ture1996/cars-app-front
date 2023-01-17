import { Link } from "react-router-dom";
import { authService } from "../services/AuthService";

export const NavBar = () => {
  return (
    <header>
      <nav>
        {window.localStorage.getItem("token") ? (
          <div>
            <Link to="/cars">Cars</Link> <Link to="/add">Add</Link>{" "}
            <Link to="/logout">Logout</Link>
          </div>
        ) : (
          <div>
            <Link to="/register">Register</Link>{" "}
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
