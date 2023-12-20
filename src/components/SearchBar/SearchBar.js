import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  StyledBackButton,
  StyledButton,
  StyledIcon,
  StyledInput,
} from './SearchBar.Styled';
import { FaBackwardStep } from "react-icons/fa6";

const SearchBar = ({ onSubmit }) => {
  return (
    <Container>
      <Link to="/">
        <StyledBackButton><FaBackwardStep /></StyledBackButton>
      </Link>
      <Form
        onSubmit={evt => {
          evt.preventDefault();

          onSubmit(evt.target.elements.searchQuery.value);
          evt.target.reset();
        }}
      >
        <StyledButton type="submit">
          <StyledIcon />
        </StyledButton>

        <StyledInput
          name="searchQuery"
          type="text"
          placeholder="Search movies"
        />
      </Form>
    </Container>
  );
};

export default SearchBar;
