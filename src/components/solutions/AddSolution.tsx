import { VFC } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'urql';
import { SolutionsQuery } from '../../graphql/query';

import { CircleButton } from '../buttons';
import { HiOutlineDocumentAdd } from 'react-icons/hi';

const AddSolution: VFC = () => {
  const location = useLocation();
  const proposalId = useParams().proposalId ?? '';

  const [result, reexecuteQuery] = useQuery({
    query: SolutionsQuery(parseInt(proposalId)),
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>fetching</p>;
  if (error) return <p>{error.message} Solutions Data</p>;

  const id = data.proposal.solutions.length + 1;
  const text = 'text';
  const member = 'member';
  const amount = 'amount';

  return location.pathname === `/modreq/${proposalId}/new` ? (
    <StackedCards>
      <SolutionCardWrapper>
        <SolutionId>新規ソリューション (ID: {id})</SolutionId>
        <SolutionMain>
          <InnerWrapper>
            <Heading>追加するルール</Heading>
            <textarea
              style={{ width: '100%' }}
              defaultValue="デフォルトテキスト"
            ></textarea>
            <Heading>部会と予算</Heading>
            <Text>
              <div style={{ marginBottom: '1rem' }}>
                部会:&nbsp;
                <select name="" id="">
                  <option value="">Op1</option>
                  <option value="">Op2</option>
                </select>
              </div>
              <div>
                予算:&nbsp;
                <input type="number" name="" id="" />
              </div>
            </Text>
            <input
              type="submit"
              value="Submit"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </InnerWrapper>
        </SolutionMain>
      </SolutionCardWrapper>
    </StackedCards>
  ) : (
    <Wrapper>
      <h2>
        最初の
        <br />
        ソリューションを
        <br />
        追加する
      </h2>
      <CircleButton _scale={1.2} _linkTo={`${proposalId}/new`}>
        <HiOutlineDocumentAdd />
      </CircleButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  h2 {
    font-size: 2.5rem;
    color: #555;
  }
`;
const StackedCards = styled.div`
  flex: 1 1 0%;
  margin: 0 1.5rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  position: relative;
`;
const SolutionCardWrapper = styled.div`
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0 8px 5px rgb(0 0 0 / 0.1));
`;
const SolutionId = styled.div`
  color: gray;
  padding: 0.35rem 0;
  box-shadow: 0 2px 5px lightgray;
  background-color: white;
  z-index: 10;
`;
const SolutionMain = styled.div`
  flex: 1 1 0;
  overflow-y: auto;
  font-size: 1.1rem;
  background-color: white;
  padding: 0 1rem;
`;
const InnerWrapper = styled.div`
  text-align: left;
  width: fit-content;
  margin: 0 auto;
`;
const Heading = styled.h3`
  color: #555;
`;
const Text = styled.div`
  padding-left: 1rem;
  color: #333;
  margin-bottom: 3rem;
`;

export default AddSolution;
