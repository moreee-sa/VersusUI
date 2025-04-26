import styled from 'styled-components';
import '@fontsource-variable/montserrat';
import { FaGithub } from "react-icons/fa";

const NavigationBar = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
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
`;

function Navbar() {
  return (
    <NavigationBar>
      <AppNameWrapper>
        <AppName>
          VersusUI
        </AppName>
      </AppNameWrapper>
      <Social>
        <a href="https://github.com/moreee-sa/VersusUI" style={{ textDecoration: "none" }} >
          <ButtonGithub>
            <FaGithub />
            Star us
          </ButtonGithub>
        </a>
      </Social>
    </NavigationBar>
  )
}

export default Navbar