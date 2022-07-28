import React from 'react'
import { Container, NavLink } from './styles'

/***********
 * Home = data parsed from forms, general 
 * Todos = list teams, pit scout
 * Team comm
 **********/

const Navbar = () => (
  <Container>
    <NavLink to="/">Grand Central</NavLink>
    <NavLink to="/pit">Pit Scout</NavLink>
    <NavLink to="/team-communicatnion">Team Slack</NavLink>
  </Container>
)

export default Navbar
