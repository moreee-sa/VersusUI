import styled from 'styled-components';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import './home.css'

const Homepage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HowTo = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Homepage>
      <Navbar />
      <HeroSection />
    </Homepage>
  )
}

export default Home