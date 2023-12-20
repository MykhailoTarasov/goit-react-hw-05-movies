import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-begin;
`

export const StyledBackButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 27px;
height: 27px;
margin: 0;
padding: 0;

cursor: pointer;

border: none;
border-radius: 4px;
background-color: #eff8f8;
`

export const StyledNavLink = styled(NavLink)`
margin: 10px 0px 10px 20px;
`

export const Main = styled.div`
display: flex;
margin-left: 20px;
`
export const InfoBox = styled.div`
padding: 15px;
`

export const AditionalInfo = styled.div`
margin-left: 20px;
`
export const AddStyledNavLink = styled(NavLink)`
text-decoration: none;
color: #f8edeb;

font-size: 16px;
line-height: 1.5;
font-weight: 500;
`
export const GenresList = styled.ul`
padding: 0;
`

export const AddList = styled.ul`
padding-left: 20px;
`