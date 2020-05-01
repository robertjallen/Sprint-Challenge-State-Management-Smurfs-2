import React, {useState, useEffect } from 'react'
import "./App.css";
import CreateForm from './CreateForm'
import {SmurfContext} from '../contexts/SmurfContext'
import axios from 'axios'
import SmurfList from './SmurfList';



export default function App() {
  
  const [smurfs, setSmurfs] = useState([])

  console.log(smurfs)

  useEffect(()=>{
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      setSmurfs(...smurfs, res.data)
    })
  },[])


  return (
    <div className="App">
      <SmurfContext.Provider value={{smurfs, setSmurfs}}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <CreateForm />
          <SmurfList />
        </SmurfContext.Provider> 
    </div>
  )
}

