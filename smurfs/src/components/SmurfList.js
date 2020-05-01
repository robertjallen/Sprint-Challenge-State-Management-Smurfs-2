import React, {useContext} from 'react'
import { SmurfContext } from "../contexts/SmurfContext";

export default function SmurfList(props) {

    const {smurfs, setSmurfs} = useContext(SmurfContext)

    return (
        <div>
            {
            smurfs.map((smurf)=>{
                return <div>{smurf.name}</div>
            })
        }
        </div>
    )
}
