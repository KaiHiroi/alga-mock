import { VFC } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import bgImg from '../../assets/images/algabg.png';

const HomeWrapper = styled.div``;

const MainWrapper = styled.main`
  height: 100vh;
  text-align: center;
  background-image: url(${bgImg});
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  background-color: limegreen;
`;

const Home: VFC = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainWrapper>
        <div>
          <h1
            style={{
              fontSize: '10rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Alga
          </h1>
          <p style={{ fontSize: '2rem' }}>self-reproductive micro-public</p>
        </div>
      </MainWrapper>
      <MainWrapper>
        <div>
          <h1
            style={{
              fontSize: '10rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Alga
          </h1>
          <p style={{ fontSize: '2rem' }}>self-reproductive micro-public</p>
        </div>
      </MainWrapper>
    </HomeWrapper>
  );
};

export default Home;
