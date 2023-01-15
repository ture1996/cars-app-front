import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarDetails } from "../components/CarDetails";
import { carService } from "../services/CarService";

export const Car = () => {

const {id} = useParams()

const [car, setCar] = useState({})

const getCarHandler = async(id) => {
    const {data} = await carService.get(id)
    setCar(data)
}

useEffect(()=>{
    getCarHandler(id)
},[])

return(
    id&&<CarDetails brand={car.brand} model={car.model} year={car.year} maxSpeed={car.max_speed} isAutomatic={car.is_automatic} engine={car.engine} numberOfDoors={car.number_of_doors}/>
)

}