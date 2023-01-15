import { Switch, Route } from "react-router-dom";
import { Car } from "./pages/AppCar";
import { Cars } from "./pages/AppCars";
import { Login } from "./pages/AppLogin";
import { AddCar } from "./pages/AddCar";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/cars">
        <Cars />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cars/:id">
        <Car />
      </Route>
      <Route path="/add">
        <AddCar/>
      </Route>
      <Route path="/edit/:id">
        <AddCar/>
      </Route>
    </Switch>
  );
};
