import React, {useContext} from 'react'
import { SmurfContext } from "../contexts/SmurfContext";

export default function SmurfList(props) {

    const {smurfs, setSmurfs} = useContext(SmurfContext)

    return (
        <div className="list">
            <h1>SMURFS! 2.0 W/ Context</h1>
            {
            smurfs.map((smurf)=>{
                return <div className="card">
                            <p>NAME: {smurf.name}</p>
                            <p>AGE: {smurf.age}</p>
                            <p>HEIGHT: {smurf.height}</p>   
                        </div>
            })
        }
        </div>
    )
}
