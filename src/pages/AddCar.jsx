import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddCarForm } from "../components/AddCarForm";
import { carService } from "../services/CarService";

export const AddCar = () => {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: 0,
    max_speed: 0,
    is_automatic: 0,
    number_of_doors: 0,
    engine: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCarHandler(id);
      return;
    }
    setNewCar({
      brand: "",
      model: "",
      year: 0,
      max_speed: 0,
      is_automatic: 0,
      number_of_doors: 0,
      engine: "",
    });
  }, [id]);

  const getCarHandler = async (id) => {
    const { data } = await carService.get(id);
    setNewCar(data);
  };

  const changeHandler = (e) => {
    if (e.target.name != "is_automatic") {
      setNewCar({ ...newCar, [e.target.name]: e.target.value });
      console.log(newCar);
      return;
    }
    setNewCar({ ...newCar, [e.target.name]: e.target.checked ? 1 : 0 });
    console.log(newCar);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (id) {
      await carService.edit(id, newCar);
      window.location.replace("/cars");
      return;
    }
    await carService.add(newCar);
    setNewCar({});
    window.location.replace("/cars");
  };

  return (
    <AddCarForm
      edit={id}
      car={newCar}
      handleChange={(e) => changeHandler(e)}
      handleSubmit={(e) => submitHandler(e)}
    />
  );
};
