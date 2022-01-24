import styled from 'styled-components';

export const FullWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const MarginedWrapper = styled.div<{ margin?: string }>`
  margin: ${(p) => p.margin}rem;
`;

export const InnerWrapper = styled.div`
  text-align: left;
  width: fit-content;
  margin: 0 auto;
`;

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 6rem;
  padding: 4rem 0 3.5rem;
`;

export const ElasticWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

export const StackedCards = styled.div`
  flex: 1 1 0%;
  margin: 0 1.5rem;
  padding-top: 1rem;
  position: relative;
`;

export const SolutionCardWrapper = styled.div`
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0 8px 5px rgb(0 0 0 / 0.1));
  /* :nth-child(1) {
    transform: scale(1) translateY(0);
    z-index: 3;
  }
  :nth-child(2) {
    transform: scale(0.96) translateY(4.5%);
    z-index: 2;
  }
  :nth-child(3) {
    transform: scale(0.94) translateY(8%);
    z-index: 1;
  }
  :not(:first-child) {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  } */
`;
