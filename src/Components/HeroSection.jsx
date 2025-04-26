import styled, { keyframes } from 'styled-components';
import { CiLocationArrow1 } from "react-icons/ci";
import '@fontsource-variable/montserrat';
import { Link } from 'react-router';
const mobileBreakpoint = '767px'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 80px;

  @media (max-width: ${mobileBreakpoint}) {
    align-items: flex-start;
    padding: 20px;
  }
`;

const HeadlineText = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 100px;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 60px;
  }
`;

const SubtitleSection = styled.div`
  margin-top: 20px;
  min-width: 40%;
  height: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 300ms forwards;
  text-align: center;

  @media (max-width: ${mobileBreakpoint}) {
    text-align: left;
  }
`;

const SubtitleText = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 200;
  font-size: 20px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
  }
`;

const OverlaySection = styled.div`
  margin-top: 50px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 600ms forwards;
`;

const ButtonOverlay = styled.div`
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
    background-color: #d8d8ba;
    box-shadow: 0px 0px 35px 5px #E2E2B6;
  }
`;

function HeroSection() {
  return (
    <MainContent>
      <HeadlineText>
        VersusUI
      </HeadlineText>
      <SubtitleSection>
        <SubtitleText>
          A <strong>Real-time</strong> score overlay for friendly 1vs1 and team face-offs.
        </SubtitleText>
      </SubtitleSection>
      <OverlaySection>
        <Link to={"/overlay"} style={{ textDecoration: "none" }}>
          <ButtonOverlay>
            <CiLocationArrow1 />
            Start Overlay
          </ButtonOverlay>
        </Link>
      </OverlaySection>
    </MainContent>
  )
}

export default HeroSection