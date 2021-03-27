import styled from "styled-components";
import {Search} from '@styled-icons/fa-solid'

const SearchContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 2.5%;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  align-items: center;
  box-sizing: border-box;
  padding: 0.25rem;


  @media(min-width: 992px) {
    display: none;
  }
`;

const SearchField = styled.input`
  border: none;
  font-size: 1.25rem;
  padding: 0.25rem;
  flex: 1;
  outline: none;
`;

const SearchIcon = styled(Search)`
  width: 1.25rem;
  height: 1.25rem;
  flex: 0 auto;
  margin: 0;
  padding: 0;
`;

const SearchBar = () => (
  <SearchContainer>
    <SearchIcon />
    <SearchField placeholder="Search notes..." />
  </SearchContainer>
)

export default SearchBar;