import { Container, Hello, Text } from './styles'
import React, { useState, useEffect } from 'react'
/*
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
*/

const Greeting = () => (
    <Container>
      <Hello>Welcome to the MTA</Hello>
      <Text>What Train ... 2 Train!!!</Text>
      <Hello>This is the scouting form</Hello>
      <Content/>
      <Content2/>
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


/*
export function Content() {
  const [data,setData]=useState(null); 
  const [print,setPrint]=useState(false); 

  function getData(val) 
  {
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }
  return (
    <div className="App">
      {
      print?
      <h1>{data}</h1>
      :null
      }
      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)}> Print Value</button>
    </div>
  )
}

^^^^^^^^^^^^^^^^^^^^^
reference code:
https://www.youtube.com/watch?v=Px4Lm8NixtE 
*/

export const Content = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val){
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }

  return (
    <div>
      {
        print?
        <h1>Hello {data}</h1>
        :null
      }
      <p>Enter your name</p>
      <form>
      <input type="text" onChange={getData} placeholder="Your Name"/>
      </form>
      <button onClick={()=>setPrint(true)}> Submit</button>
    </div>
  )
}

export const Content2 = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val){
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }

  return (
    <div>
      {
        print?
        <h1>Focus on {data}</h1>
        :null
      }
      <p>Enter the team name and/or number that you are scouting</p>
      <form>
      <input type="text" onChange={getData} placeholder="Your Name"/>
      </form>
      <button onClick={()=>setPrint(true)}> Submit</button>
    </div>
  )
}

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

