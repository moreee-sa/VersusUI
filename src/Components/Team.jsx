import { useState, useRef, useEffect } from "react";
import styled from "styled-components"
import '@fontsource-variable/montserrat';

const TeamWrapper = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const TeamNameWrapper = styled.div`
  background-color: ${props => props.$color};
  width: 100%;
  height: 100px;
  display: flex;
  /* Modificare */
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: ${props => props.$position === "L" ? "12px 0 0 12px" : "0 12px 12px 0"};
  box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.4);
`;

const HiddenSpan = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 700;
  font-size: 50px;
  text-transform: uppercase;
`;

const TeamNameInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  background-color: transparent;
  font-size: ${props => props.fontSize}px;
`;

function Team({position, currentColors}) {
  const [value, setValue] = useState('Team Name');
  const [fontSize, setFontSize] = useState(50);
  const spanRef = useRef();

  useEffect(() => {
    if (spanRef.current) {
      const maxWidth = 400;
      const currentWidth = spanRef.current.offsetWidth;

      let newFontSize = 50;
      if (currentWidth > maxWidth) {
        newFontSize = Math.max(24, (50 * maxWidth) / currentWidth);
      }
      setFontSize(newFontSize);
    }
  }, [value]);

  return (
    <TeamWrapper>
      <TeamNameWrapper $position={position} $color={currentColors}>
      <HiddenSpan ref={spanRef}>{value || 'Team Name'}</HiddenSpan>
      <TeamNameInput
        maxLength={30}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fontSize={fontSize}
      />
      </TeamNameWrapper>
    </TeamWrapper>
  )
}

export default Team