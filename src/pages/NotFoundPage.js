import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <span>
      Sorry, something went wrong. Click the link to go to the{' '}
      <Link to="/">home page</Link>.
    </span>
  );
};

export default NotFoundPage;
