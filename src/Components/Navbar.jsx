import styled from 'styled-components';
import '@fontsource-variable/montserrat';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
const mobileBreakpoint = '767px'

const NavigationBar = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 0;
    height: auto;
  }
`;

const AppNameWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const AppName = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 25px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 20px;
  }
`;

const Social = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

const ButtonGithub = styled.div`
  border-radius: 16px;
  height: 42px;
  background-color: #E2E2B6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  box-sizing: border-box;
  color: #161c29;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #000000;
    color: white;
  }
`;

function Navbar() {
  return (
    <NavigationBar>
      <AppNameWrapper>
        <AppName>
          <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
            VersusUI
          </Link>
        </AppName>
      </AppNameWrapper>
      <Social>
        <a href="https://github.com/moreee-sa/VersusUI" style={{ textDecoration: "none" }} >
          <ButtonGithub>
            <FaGithub />
            Support me
          </ButtonGithub>
        </a>
      </Social>
    </NavigationBar>
  )
}

export default Navbar