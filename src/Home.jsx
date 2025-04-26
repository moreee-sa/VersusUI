import styled from 'styled-components';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';

const Homepage = styled.div`
  width: 100%;
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

const HowTo = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Homepage>
      <Navbar />
      <HeroSection />
      {/* Coming soon */}
      <HowTo />
    </Homepage>
  )
}

export default Home