import '../i18n';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { CiLocationArrow1 } from "react-icons/ci";
import '@fontsource-variable/montserrat';
import { Link } from 'react-router';
import { MOBILEBREAKPOINT } from '../lib/constants';

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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 80px;

  @media (max-width: ${MOBILEBREAKPOINT}) {
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

  @media (max-width: ${MOBILEBREAKPOINT}) {
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

  @media (max-width: ${MOBILEBREAKPOINT}) {
    text-align: left;
  }
`;

const SubtitleText = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 200;
  font-size: 20px;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 18px;
  }
`;

const OverlaySection = styled.div`
  margin-top: 65px;
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

const GuideSectionLink = styled.div`
  margin-top: 20px;
  color: #C0C0C0;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 15px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 600ms forwards;
`;

function HeroSection() {
  const { t } = useTranslation();

  return (
    <MainContent>
      <HeadlineText>
        VersusUI
      </HeadlineText>
      <SubtitleSection>
        <SubtitleText>
          {t('realTimeScore')}
        </SubtitleText>
      </SubtitleSection>
      <OverlaySection>
        <Link to={"/overlay"} style={{ textDecoration: "none" }}>
          <ButtonOverlay>
            <CiLocationArrow1 />
            {t('startOverlay')}
          </ButtonOverlay>
        </Link>
      </OverlaySection>
      <GuideSectionLink>
        <Link to={"/setup"} style={{ color: "inherit" }}>
          {t('helpGuide')}
        </Link>
      </GuideSectionLink>
    </MainContent>
  )
}

export default HeroSection