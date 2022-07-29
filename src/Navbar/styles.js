import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #911D21;
  /*
  ${({ theme }) => theme.colors.layout.secondary};
  */
`

export const NavLink = styled(link).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.colors.fonts.accent,
  },
  exact: true,
}))`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 22px;
  color: grey;
  margin: 0 20px;
  text-decoration: none;
`
/* color: ${({ theme }) => theme.colors.fonts.header}; */