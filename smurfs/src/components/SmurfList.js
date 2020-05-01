import React, {useContext} from 'react'
import { SmurfContext } from "../contexts/SmurfContext";
import axios from 'axios'

export default function SmurfList(props) {

    

    const {smurfs, setSmurfs} = useContext(SmurfContext)

    const deleteSmurf = (id) => {
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log(res.data)
            setSmurfs(res.data)
        })
    }

    return (
        <div className="list">
            <h1>SMURFS! 2.0 W/ Context</h1>
            {
            smurfs.map((smurf)=>{
                return <div className="card">
                            <p>NAME: {smurf.name}</p>
                            <p>AGE: {smurf.age}</p>
                            <p>HEIGHT: {smurf.height}</p>
                            <button onClick={()=> deleteSmurf(smurf.id)}>Delete</button>   
                        </div>
            })
        }
        </div>
    )
}
