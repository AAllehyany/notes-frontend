import styled from "styled-components";

const Header = styled.header`
  padding: 1rem;
  color: ${props => props.theme.textPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-bottom: 1rem;
`;


const HeadingLink = styled.a`
  font-size: 1.75rem;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: ${props => props.theme.yellow};
  font-weight: bold;
  font-style: italic;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarItem = styled.a`
  padding: 0.5rem 1rem;
  margin: 1px;
  color:#ffffff;
  text-decoration: none;
  background-color:${props => props.theme.yellow};
  border-radius: 0.25rem;
  font-size: 1rem;

  &:hover {
    background-color: ${props => props.theme.lightGray};
  }
`;

const PageHeader = () => (
  <Header>
    <HeadingLink href="/">Notes</HeadingLink>
    <NavbarContainer>
      <NavbarItem href="/register">Post</NavbarItem>
    </NavbarContainer>
  </Header>
)

export default PageHeader;