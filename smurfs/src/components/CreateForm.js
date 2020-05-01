import React, { useState, useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

const CreateForm = props => {

  const initialSmurf = {name: "", age: "", height: "" }

  const [newSmurf, setNewSmurf] = useState(initialSmurf)

  const {smurfs, setSmurfs} = useContext(SmurfContext)

  const handleChange = event => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newSmurf.name || !newSmurf.age || !newSmurf.height) {
      alert("Please fill out all fields!");
    } else {
      setSmurfs([newSmurf, ...smurfs]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewSmurf(initialSmurf);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={newSmurf.name}
      />

      <input
        type="text"
        name="age"
        placeholder="age"
        onChange={handleChange}
        value={newSmurf.age}
      />

      <input
        type="text"
        name="height"
        placeholder="height"
        onChange={handleChange}
        value={newSmurf.height}
      />
      
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>

    </form>
  );
};

export default CreateForm;
