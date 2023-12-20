import styled from 'styled-components';
import { IoSearchCircleSharp } from 'react-icons/io5';

export const Container = styled.div`
display: flex;
align-items: center;
gap: 15px;
padding-left: 20px;
height: 60px;
`

export const Form = styled.form`
height: 27px;
`

export const StyledInput = styled.input`
  display: inline-block;
  max-width: 300px;
  height: 25px;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 30px;

  border-radius: 4px;
  color: #5b5b5b;
  background-color: #d3f0ed;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  position: absolute;
  border: none;
  border-radius: 4px;
  background-color: #eff8f8;
`;

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


export const StyledIcon = styled(IoSearchCircleSharp)`
  width: 20px;
  height: 20px;
`;