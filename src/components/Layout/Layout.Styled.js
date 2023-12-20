import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-left: 40px;
  height: 50px;

  border-bottom: 1px solid #f8edeb;

  backdrop-filter: blur(2px);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #f8edeb;

  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;
