import React, { useState, useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import axios from 'axios'

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
      axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        console.log("POST response", res.data)
        setSmurfs(res.data)
      })
      // setSmurfs([newSmurf, ...smurfs]);
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
      
      <div className="row">
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </div>

    </form>
  );
};

export default CreateForm;
