import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CarsDetails } from "../components/CarsDetails";
import { carService } from "../services/CarService";

export const Cars = () => {
  const [cars, setCars] = useState({});

  const [links, setLinks] = useState({});

  const location = useLocation();
  const parameters = new URLSearchParams(location.search);

  const getCarsHandler = async () => {
    const { data } = await carService.getAll(
      parameters.get("page"),
      parameters.get("per_page")
    );

    if (!parameters.get("page") && !parameters.get("per_page")) {
      setCars(data);
      return;
    }
    setCars(data.data);
    setLinks(data.links);
  };

  useEffect(() => {
    getCarsHandler();
  }, [location]);

  const deleteHandler = async (id) => {
    await carService.delete(id);
    getCarsHandler();
  };

  return (
    <div>
      <h1>Cars</h1>
      <ul>
        {cars[0] &&
          cars.map((car) => (
            <li key={car.id}>
              <CarsDetails
                id={car.id}
                model={car.model}
                brand={car.brand}
                handleDelete={() => deleteHandler(car.id)}
              />
            </li>
          ))}
      </ul>
      <div>
        {links[0] &&
          links.map((link) =>
            link.label != "&laquo; Previous" && link.label != "Next &raquo;" ? (
              <Link
                key={link.label}
                to={`/cars?per_page=${
                  parameters.get("per_page") ? parameters.get("per_page") : 5
                }&page=${link.label}`}
              >
                <button>{link.label}</button>
              </Link>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};
