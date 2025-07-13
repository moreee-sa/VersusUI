import './i18n';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import '@fontsource-variable/montserrat';
import { MOBILEBREAKPOINT, DESKTOPBREAKPOINT } from './lib/constants';

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

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 10px;
  padding: 0 20px;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    display: none;
  }
`;

const SidebarButton = styled.button`
  width: 100%;
  height: 42px;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${({ $isActive }) => ($isActive ? '#161C29' : '#ffffff')};
  border: none;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: left;
  border-radius: 8px;
  background-color: ${({ $isActive }) => ($isActive ? '#e2e2b647' : 'transparent')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #E2E2B6;
    color: #161C29;
  }
`;

const DocsContent = styled.div`
  flex: 6;

  @media (max-width: ${MOBILEBREAKPOINT}) {
    flex: auto;
    margin-top: 20px;
  }
`;

const DropdownBar = styled.div`
  width: 100%;
  height: 64px;
  display: none;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  
  @media (max-width: ${MOBILEBREAKPOINT}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DocsSelect = styled.select`
  appearance: none;
  border: transparent;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0 25px;
  background-color: transparent;
  color: #ffffff;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 500;
  font-size: 20px;
  user-select: none;
`;

const DocsOption = styled.option`
  background-color: #121212;
  color: #aca8a8;
  border-radius: 0;
  border: 0;
`;

const DocsArticle = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const DocsTitle = styled.span`
  color: #ffffff;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 600;
  font-size: 40px;
  text-transform: uppercase;

  @media (max-width: ${DESKTOPBREAKPOINT}) {
    display: none;
  }
`;

const DocsParagraph = styled.span`
  color: #ffffff;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 300;
  font-size: 15px;

  @media (max-width: ${DESKTOPBREAKPOINT}) {
    font-size: 18px;
  }
`;

function Setup() {
  const { t } = useTranslation();
  const [selectedGuide, setSelectedGuide] = useState('Introduction');

  const handleSelectChange = (e) => {
    setSelectedGuide(e.target.value);
  };

  const guidesList = [
    { value: 'Introduction', title: t('guide.introduction.title'), content: t('guide.introduction.content') },
    { value: 'Setup', title: t('guide.setup.title'), content: t('guide.setup.content') },
    { value: "Control Score", title: t('guide.controlScore.title'), content: t('guide.controlScore.content') },
    { value: "Select Palette", title: t('guide.selectPalette.title'), content: t('guide.selectPalette.content') },
    { value: "Edit Names", title: t('guide.editNames.title'), content: t('guide.editNames.content') },
  ];  

  return (
    <SetupHome>
      <Navbar />
      <ContentWrapper>
        <DropdownBar>
          <DocsSelect onChange={handleSelectChange} value={selectedGuide}>
            {guidesList.map((guide) => (
              <DocsOption key={guide.value} value={guide.value}>
                {guide.title}
              </DocsOption>
            ))}
          </DocsSelect>
        </DropdownBar>
  
        <Sidebar>
          {guidesList.map((guide) => (
            <SidebarButton
              key={guide.value}
              $isActive={selectedGuide === guide.value}
              onClick={() => setSelectedGuide(guide.value)}
            >
              {guide.title}
            </SidebarButton>
          ))}
        </Sidebar>
  
        <DocsContent>
          {guidesList.map((guide) => (
            selectedGuide === guide.value && (
              <DocsArticle key={guide.value}>
                <DocsTitle>{guide.title}</DocsTitle>
                <DocsParagraph>
                  <Trans i18nKey={guide.content} />
                </DocsParagraph>
              </DocsArticle>
            )
          ))}
        </DocsContent>
      </ContentWrapper>
    </SetupHome>
  )  
}

export default Setup