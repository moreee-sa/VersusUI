import styled from 'styled-components'
import Team from './Components/Team';
import Counter from './Components/Counter';

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;

const VersusWrapper = styled.div`
  width: 1280px;
  height: 200px;
  display: flex;
  /* background-color: red; */
`;

function App() {
  return (
    <PageWrapper>
      <VersusWrapper>
        <Team position={"L"} />
        <Counter />
        <Team />
      </VersusWrapper>
    </PageWrapper>
  )
}

export default App