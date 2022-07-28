import { Container, Hello, Text } from './styles'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Greeting = () => (
    <Container>
      <Hello>Welcome to the MTA</Hello>
      <Text>What Train ... 2 Train!!!</Text>
      <Content/>
      <Score/>
      <Climb/>
    </Container>
  
)

export default Greeting


/***************************************
 * Divide betwween
 * Greeting
 * &
 * Form
 **************************************/

/*React.ReactDOM.findDOMNode("email")
 export function BasicExample() {
  const handlesubmit=() => {

    console.log(React.ReactDOM.findDOMNode("email"))

  }
   return (
     <Form >
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
       </Form.Group>
       <Button variant="primary" type="submit" onClick={handlesubmit.bind(this)}>
         Submit
       </Button>
     </Form>
   );
 }
 */




export const Content = () => {
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')

  return (
    <div>
      <h1>Scouting Form</h1>
      <p>Enter</p>
      <form>
      <input type="text" placeholder="Scout Name" value={name} setValue={setName}/>
      <input type="text" placeholder="Team Name" value={team} setValue={setTeam}/>
      </form>
    </div>
  )
}

/*
const inputContent = () => {
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')

return (
  <div> 
      <h1>Scouting Form</h1>
      <p>Enter the following fields for the team you are scouting</p> 
      <input label="Scout Name" value={name} setValue={setName} />
      <input label="Team Name" value={team} setValue={setTeam} />
  </div>
)
}
*/

const Score = () => {
  const [score, setScore] = useState(0)

  return (
      <div>
          <h1>Score</h1>
          <h2>{score}</h2>
          <button onClick={() => setScore(score + 2)}>+2</button>
          <button onClick={() => setScore(score - 2)}>-2</button>
          <button onClick={() => setScore(score + 1)}>+1</button>
          <button onClick={() => setScore(score - 1)}>-1</button>
      </div>
  )
}

const Climb = ({teamClimb}) => {
  const [climb, setClimb] = useState(false)

  return (
      <div>
          <h3>{teamClimb}</h3>
          <h1>{climb}</h1>
          <button onClick={() => setClimb(false)}>No climb</button>
          <button onClick={() => setClimb(true)}>1st level climb</button>
          <button onClick={() => setClimb(true)}>2nd level climb</button>
          <button onClick={() => setClimb(true)}>3rd level climb</button>
      </div>
  )
}



/*
import { Container, Hello, Text } from './styles'
import Weather from '../Weather'

const Greeting = () => {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  const setLocation = position => {
    setCoords({latitude: position.coords.latitude, longitude: position.coords.longitude})
  }

  const errorHandler = err => {
    if(err.code === 1) {
      alert("Error: Access is denied!");
    } else if( err.code === 2) {
      alert("Error: Position is unavailable!");
    }
  }

  useEffect(() => {
    if(navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      const options = {timeout:60000};
      navigator.geolocation.getCurrentPosition(setLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
  }, [])

  useEffect(() => {
    if (coords) {
      const getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
        const data = await response.json()
        setWeather(data)
      }

      getWeather()
    }
  }, [coords])

  console.log('weather: ')
  console.log(weather)

  console.log('coords: ')
  console.log(coords)
  return (
    <Container>
      <Hello>HELLO!</Hello>
      <Text>It is a beautiful day outside...</Text>
      {weather ? <Weather weather={weather} /> : <Text>Your weather data is loading...</Text>}
    </Container>
  )
}

export default Greeting
*/