import React from 'react'
import { Container, NavLink } from './styles'

/***********
 * Home = data parsed from forms, general 
 * Todos = list teams, pit scout
 * Team comm
 **********/

const Navbar = () => (
  <Container>
    <NavLink to="/">Data</NavLink>
    <NavLink to="/todo">Pit Scout</NavLink>
    <NavLink to="/comment">Comment Section</NavLink>
  </Container>
)

export default Navbar
