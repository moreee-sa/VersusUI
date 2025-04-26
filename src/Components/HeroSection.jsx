import styled, { keyframes } from 'styled-components';
import '@fontsource-variable/montserrat';
import DemoImage from '../assets/VersusUI-overview.png';
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

const ImageSection = styled.div`
  margin-top: 50px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 600ms forwards;

  @media (max-width: ${mobileBreakpoint}) {
    margin-top: 80px;
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
      <ImageSection>
        <Link to={"/overlay"}>
          <img src={DemoImage} alt="DemoImage" style={{ objectFit: "cover", width: "100%", height: "100%"}} />
        </Link>
      </ImageSection>
    </MainContent>
  )
}

export default HeroSection