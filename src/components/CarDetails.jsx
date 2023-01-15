export const CarDetails = ({brand, model, year, maxSpeed, isAutomatic, engine, numberOfDoors}) => {
    return(
        <div>
            Brand: {brand}
            <br/>
            Model: {model}
            <br/>
            Year: {year}
            <br/>
            Max speed: {maxSpeed}
            <br/>
            Automatic: {isAutomatic ? "True" : "False"}
            <br/>
            Engine: {engine}
            <br/>
            Number of doors: {numberOfDoors}
            <br/>
        </div>
    )
}