import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  useEffect(() => {
    axios.get('/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((error) => {
        console.log(error.message);

      })
  }, [])

  const [Jokes, setJokes] = useState([])

  return (
    <>
      <h1>Jokes {Jokes.length}</h1>
      {Jokes.map((joke) => (
        <h1 key={joke.setup} >{joke.setup} </h1>
      ))}
    </>
  )
}

export default App
