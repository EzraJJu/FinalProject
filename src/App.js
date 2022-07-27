import logo from './logo.svg';
import './App.css';
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AllTodos from './AllTodos'
import Greeting from './Greeting'
import NavBar from './Navbar'
import theme from './theme'
import { TodosProvider } from './context'
import SpecificTodo from './SpecificTodo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
