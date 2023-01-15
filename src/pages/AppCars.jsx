import { useEffect, useState } from "react";
import { CarsDetails } from "../components/CarsDetails";
import { carService } from "../services/CarService";

export const Cars = () => {
  const [cars, setCars] = useState({});

  const getCarsHandler = async () => {
    const { data } = await carService.getAll();
    setCars(data);
  };

  useEffect(() => {
    getCarsHandler();
  }, []);

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
    </div>
  );
};
