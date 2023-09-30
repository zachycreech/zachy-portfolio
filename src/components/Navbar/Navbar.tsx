import styled from "styled-components";

const Header = styled.header`
  width: 92vw;
  padding: 1vh 4vw !important;
  font-weight: bold;
  background: transparent;
  color: #fff;
  transition: 0.4 ease-in-out;
  z-index: 2;
  dispalay: inline !important;
`;
const Link = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent;
  margin-left: 4vw;
  transition: 0.4 ease-in-out;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;
const Table = styled.table`
  width: 100%;
`;
const LogoDiv = styled.td`
  font-size: 40px;
  color: rgb(117, 44, 255);
`;

const LinksDiv = styled.td`
  text-align: right;
`;

const NavBar = () => {
  return (
    <Header>
      <Table>
        <tr>
          <LogoDiv> zachy.</LogoDiv>
          <LinksDiv>
            <Link href="#"> projects</Link>
            <Link href="#"> about</Link>
            <Link href="#"> contact</Link>
          </LinksDiv>
        </tr>
      </Table>
    </Header>
  );
};

export default NavBar;
