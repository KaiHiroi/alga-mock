import { VFC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'urql';
import { ProblemTextQuery } from '../../graphql/query';
import { MarginedWrapper, InnerWrapper } from '../Wrapper';

const ProblemText: VFC = () => {
  return (
    <MarginedWrapper margin="0.75">
      <ProblemTextBox>
        問題:
        <ProblemTextFetch />
      </ProblemTextBox>
    </MarginedWrapper>
  );
};

const ProblemTextBox = styled(InnerWrapper)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
`;

const ProblemTextFetch: VFC = () => {
  const proposalId = parseInt(useParams().proposalId ?? '0');

  const [result, reexecuteQuery] = useQuery({
    query: ProblemTextQuery(proposalId),
  });
  const { data, fetching, error } = result;

  if (fetching) return <div>Loading...ProblemText data</div>;
  if (error) return <div>{error.message} ProblemText data</div>;

  return (
    <div style={{ paddingLeft: '1rem' }}>{data.proposal.problem.text}</div>
  );
};

export default ProblemText;
