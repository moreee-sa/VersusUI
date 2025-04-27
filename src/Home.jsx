import { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import './home.css';

const Homepage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Home() {
  useEffect(() => {
    document.body.classList.add('home-page');

    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);
  
  return (
    <Homepage>
      <Navbar />
      <HeroSection />
    </Homepage>
  )
}

export default Home