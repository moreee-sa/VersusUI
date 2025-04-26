import styled from 'styled-components';
import Navbar from './Components/Navbar';
import '@fontsource-variable/montserrat';
import { FaClock } from "react-icons/fa";

const SetupHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(270deg, #1A120B, #3C2A21, #D5CEA3);
  background-size: 600% 600%;
  animation: GradientAnimation 20s ease infinite;

  @keyframes GradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const ComingSoon = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 30px;
`;

function Setup() {
  return (
    <SetupHome>
      <Navbar />
      <ComingSoon>
        <FaClock />
        Coming soon
      </ComingSoon>
    </SetupHome>
  )
}

export default Setup