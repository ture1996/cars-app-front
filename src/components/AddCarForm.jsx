export const AddCarForm = ({car, handleChange, handleSubmit, edit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <label>Brand</label>
            <input type="text" name="brand" value={car.brand} onChange={handleChange}/>
            <br/>
            <label>Model</label>
            <input type="text" name="model" value={car.model} onChange={handleChange}/>
            <br/>
            <label>Year</label>
            <input type="number" name="year" value={car.year} onChange={handleChange}/>
            <br/>
            <label>Max speed</label>
            <input type="number" name="max_speed" value={car.max_speed} onChange={handleChange}/>
            <br/>
            <label>Automatic</label>
            <input type="checkbox" name="is_automatic" checked={car.is_automatic} value={car.is_automatic} onChange={handleChange}/>
            <br/>
            <label>Number of doors</label>
            <input type="number" name="number_of_doors" value={car.number_of_doors} onChange={handleChange}/>
            <br/>
            <label>Engines</label>
            <br/>
            <input type="radio" name="engine" value="diesel" checked={car.engine==='diesel'?1:0} onChange={handleChange}/><label>Diesel</label>
            <br/>
            <input type="radio" name="engine" value="gasoline" checked={car.engine==='gasoline'?1:0} onChange={handleChange}/><label>Gasoline</label>
            <br/>
            <input type="radio" name="engine" value="hybrid" checked={car.engine==='hybrid'?1:0} onChange={handleChange}/><label>Hybrid</label>
            <br/>
            <input type="radio" name="engine" value="electric" checked={car.engine==='electric'?1:0} onChange={handleChange}/><label>Electric</label>
            <br/>
            <button type="submit">{edit? "Edit car" : "Add car"}</button>
        </form>
    )
}