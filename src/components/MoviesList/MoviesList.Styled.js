import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const List = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: column;
list-style: none;
justify-content: center;
align-items: flex-begin;
gap: 10px;

margin: 0;
padding-left: 20px;


`
export const Item = styled.li`
display: flex;
`

export const StyledNavLink = styled(NavLink)`
display: flex;
align-items: center;
max-height: 30px;
text-decoration: none;
color: #c5b0a3;
`
