import { useState } from "react";
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

  const incrementLeft = () => setLeftScore(prev => prev + 1);
  const decrementLeft = () => setLeftScore(prev => Math.max(0, prev - 1));

  const incrementRight = () => setRightScore(prev => prev + 1);
  const decrementRight = () => setRightScore(prev => Math.max(0, prev - 1));

  return (
    <CounterWrapper>
    <CounterTeamLeft onClick={incrementLeft} onContextMenu={(e) => { e.preventDefault(); decrementLeft(); }}>
      <CounterNumber>{leftScore}</CounterNumber>
    </CounterTeamLeft>
    <CounterTeamRight onClick={incrementRight} onContextMenu={(e) => { e.preventDefault(); decrementRight(); }}>
      <CounterNumber>{rightScore}</CounterNumber>
    </CounterTeamRight>
  </CounterWrapper>
  )
}

export default Counter