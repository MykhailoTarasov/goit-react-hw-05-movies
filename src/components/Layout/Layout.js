import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledNavLink } from './Layout.Styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;