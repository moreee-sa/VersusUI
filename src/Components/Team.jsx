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
  background-color: ${props => props.$position === "L" ? "#c1121f" : "#0077b6"};
  width: 100%;
  height: 100px;
  display: flex;
  /* Modificare */
  justify-content: center;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;
  border-radius: ${props => props.$position === "L" ? "12px 0 0 12px" : "0 12px 12px 0"};
  box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.4);
`;

const TeamNameSpan = styled.span`
  color: white;
  font-family: 'Montserrat Variable', sans-serif;
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
`;

function Team({TeamName, position}) {
  return (
    <TeamWrapper>
      <TeamNameWrapper $position={position}>
        <TeamNameSpan>
          {TeamName}
        </TeamNameSpan>
      </TeamNameWrapper>
    </TeamWrapper>
  )
}

export default Team 