import logo from './logo.svg';
import './App.css';
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Comments from './Comm'
import AllTodos from './AllTodos'
import Greeting from './Data'
import NavBar from './Navbar'
import theme from './theme'
import { TodosProvider } from './context'
import SpecificTodo from './SpecificTodo'

const AppWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <TodosProvider>
      <AppWrapper>
        <BrowserRouter basename="/Metro-Team395">
          <NavBar />
          <Switch>
            <Route path="/team-communication">
              <Comm />
            </Route>
            <Route path="/todo/:id">
              <SpecificTodo />
            </Route>
            <Route path="/todo">
              <AllTodos />
            </Route>
            <Route path="/">
              <Data />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    </TodosProvider>
  </ThemeProvider>
)

export default App;
