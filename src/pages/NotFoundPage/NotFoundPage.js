
import { StyledLink } from './NotFoundPage.Styled';

const NotFoundPage = () => {
  return (
    <span>
      Sorry, something went wrong. Click the link to go to the{' '}
      <StyledLink to="/">home page</StyledLink>.
    </span>
  );
};

export default NotFoundPage;
