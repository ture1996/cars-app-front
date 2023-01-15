import { Link } from "react-router-dom";

export const CarsDetails = ({ id, brand, model, handleDelete }) => {
  return (
    <div>
      <Link to={`/cars/${id}`}>
        {brand} {model}
      </Link>{" "}
      <button onClick={handleDelete}>Delete</button>{" "}
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};
