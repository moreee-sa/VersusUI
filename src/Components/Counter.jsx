import { useState, useEffect, useCallback } from "react";
import styled from "styled-components"
import '@fontsource-variable/montserrat';

const CounterWrapper = styled.div`
  height: 100%;
  width: 280px;
  display: flex;
  align-items: center;
  z-index: 5;
  /* background-color: #1edb3e; */
`;

const CounterTeamLeft = styled.div`
  background-color: #2C3333;
  height: 180px;
  width: 100%;
  border: solid #2E4F4F;
  border-radius: 8px 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -20px 0px 50px -12px rgba(0, 0, 0, 0.5);
`;

const CounterTeamRight = styled.div`
  background-color: #2C3333;
  height: 180px;
  width: 100%;
  border: solid #2E4F4F;
  border-radius: 0 8px 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 0px 50px -12px rgba(0, 0, 0, 0.5);
`;

const CounterNumber = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 60px;
  font-weight: 600;
`;

function Counter() {
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  // Memorizza le funzioni di aggiornamento
  const incrementLeft = useCallback(() => setLeftScore(prev => prev + 1), []);
  const decrementLeft = useCallback(() => setLeftScore(prev => Math.max(0, prev - 1)), []);
  const incrementRight = useCallback(() => setRightScore(prev => prev + 1), []);
  const decrementRight = useCallback(() => setRightScore(prev => Math.max(0, prev - 1)), []);

  // Funzioni per la rotellina e click non cambiano molto, ma puoi anche memoizzarle se vuoi
  const handleWheelLeft = (e) => {
    if (e.deltaY < 0) incrementLeft();
    else decrementLeft();
  };

  const handleWheelRight = (e) => {
    if (e.deltaY < 0) incrementRight();
    else decrementRight();
  };

  // Memoizza handleKeyPress con tutte le dipendenze
  const handleKeyPress = useCallback((e) => {
    if (document.activeElement.tagName === "INPUT") {
      return;
    }

    if (['q', 'e', 'a', 'd'].includes(e.key)) {
      e.preventDefault();

      if (e.key === 'q') decrementLeft();
      else if (e.key === 'e') incrementLeft();
      else if (e.key === 'a') decrementRight();
      else if (e.key === 'd') incrementRight();
    }
  }, [decrementLeft, incrementLeft, decrementRight, incrementRight]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <CounterWrapper>
      <CounterTeamLeft onWheel={handleWheelLeft} onClick={incrementLeft} onContextMenu={(e) => { e.preventDefault(); decrementLeft(); }}>
        <CounterNumber>{leftScore}</CounterNumber>
      </CounterTeamLeft>
      <CounterTeamRight onWheel={handleWheelRight} onClick={incrementRight} onContextMenu={(e) => { e.preventDefault(); decrementRight(); }}>
        <CounterNumber>{rightScore}</CounterNumber>
      </CounterTeamRight>
    </CounterWrapper>
  )
}

export default Counter