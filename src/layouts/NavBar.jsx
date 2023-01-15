import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Link to="/cars">Cars</Link> <Link to="/add">Add</Link> <Link to="/login">Login</Link>
    </header>
  );
};
