import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CarsDetails } from "../components/CarsDetails";
import { SearchForm } from "../components/SearchForm";
import { carService } from "../services/CarService";

export const Cars = () => {
  const [cars, setCars] = useState({});
  const [search, setSearch] = useState({ model: "", brand: "" });
  const [links, setLinks] = useState({});

  const location = useLocation();
  const parameters = new URLSearchParams(location.search);

  const getCarsHandler = async () => {
    const { data } = await carService.getAll(
      parameters.get("page"),
      parameters.get("per_page"),
      parameters.get("brand"),
      parameters.get("model")
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

  const onChangeHandler = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log(search);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if(!search.brand&&!search.model){
      return;
    }
    if(!search.brand){
      window.location.replace(`/cars?model=${search.model}`);
      return;
    }
    if(!search.model){
      window.location.replace(`/cars?brand=${search.brand}`);
      return;
    }
    window.location.replace(`/cars?brand=${search.brand}&model=${search.model}`)
  };

  return (
    <div>
      <SearchForm
        model={search.model}
        brand={search.brand}
        handleOnChange={(e) => onChangeHandler(e)}
        handleSearch={(e) => searchHandler(e)}
      />
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
