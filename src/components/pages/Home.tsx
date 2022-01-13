import { VFC } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: limegreen;
`;

const MainWrapper = styled.main`
  text-align: center;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: limegreen;
`;

const Home: VFC = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <h1 className="text-6xl font-bold items-center">Alga</h1>
        <p>self-reproductive micro-public</p>
        <button>Launch App</button>
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default Home;
