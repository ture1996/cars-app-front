import { NavBar } from "./NavBar";

export const Page = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
