import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Header;
