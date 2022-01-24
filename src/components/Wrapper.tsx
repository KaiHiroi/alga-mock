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

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 6rem;
  padding: 4rem 0 3.5rem;
`;
