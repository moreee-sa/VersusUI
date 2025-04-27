import { useState, useEffect } from 'react';
import styled from 'styled-components'
import Team from './Components/Team';
import Counter from './Components/Counter';
import './index.css'

const PageWrapper = styled.div`
  width: 100%;
`;

const VersusWrapper = styled.div`
  width: 1280px;
  height: 200px;
  display: flex;
`;

const colorPairs = {
  '0': ['#c1121f', '#0077b6'], // Default
  '1': ['#FF6B6B', '#FFD93D'],
  '2': ['#6BCB77', '#4D96FF'],
  '3': ['#9D4EDD', '#F72585'],
  '4': ['#156064', '#8338EC'],
};

function App() {
  const [currentColors, setCurrentColors] = useState(['#c1121f', '#0077b6']);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (document.activeElement.tagName === "INPUT") {
        return;
      }

      const newColors = colorPairs[event.key];
      if (newColors) {
        setCurrentColors(newColors);
        console.log("Colore impostato:" + newColors)
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PageWrapper>
      <VersusWrapper>
        <Team position={"L"} currentColors={currentColors[0]} />
        <Counter />
        <Team currentColors={currentColors[1]} />
      </VersusWrapper>
    </PageWrapper>
  )
}

export default App