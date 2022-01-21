import { VFC } from 'react';
import styled from 'styled-components';
import { useQuery } from 'urql';
import { ProblemTextQuery } from '../graphql/query';

const ProblemTextFetch: VFC<{ className?: string }> = ({ className }) => {
  const [result, reexecuteQuery] = useQuery({
    query: ProblemTextQuery,
  });
  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>{error.message} ProblemText data</div>;

  return <div className={className}>{data.proposal.problem.text}</div>;
};

const ProblemText: VFC = () => {
  return (
    <ProblemWrapper margin="0.75">
      <InnerWrapper>
        <Heading>問題:</Heading>
        <Text />
      </InnerWrapper>
    </ProblemWrapper>
  );
};
const ProblemWrapper = styled.div<{ margin?: string }>`
  margin: ${(p) => p.margin}rem;
`;
const InnerWrapper = styled.div`
  text-align: left;
  width: fit-content;
  margin: 0 auto;
  font-size: 1.2rem;
  font-weight: bold;
`;
const Heading = styled.div`
  color: #444;
`;
const Text = styled(ProblemTextFetch)`
  padding-left: 1rem;
  color: #444;
`;

export default ProblemText;
