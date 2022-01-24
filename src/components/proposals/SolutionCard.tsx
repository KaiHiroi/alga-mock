import { VFC } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { voteFlagState } from '../../atoms/modreq';
import { InnerWrapper } from '../Wrapper';
import { Solution } from '../../types/Types';
import { SolutionCardWrapper } from '../Wrapper';
import { GiCycle } from 'react-icons/gi';
import { FaPen } from 'react-icons/fa';
import { TextWithIcon } from '../utils/TextWithIcon';

const SolutionCard: VFC<{ solution: Solution }> = ({ solution }) => {
  const voteFlag = useRecoilValue(voteFlagState);
  return (
    <SolutionCardWrapper>
      <SolutionTitle>
        {voteFlag
          ? 'あなたはこの解決策に投票しています'
          : `ソリューション${solution.id}`}
      </SolutionTitle>
      <SolutionMain>
        <InnerWrapper>
          <Heading>追加するルール</Heading>
          <PreWrapText>{solution.law ?? 'なし'}</PreWrapText>
          <Heading>部会と予算</Heading>
          <Text>
            <div style={{ marginBottom: '1rem' }}>
              部会:&nbsp;
              {solution.members?.length !== 0
                ? solution.members?.map((v) => v.address).join('、')
                : 'なし'}
            </div>
            <div>
              予算:&nbsp;
              {solution.amount ?? 'なし'}
            </div>
          </Text>
        </InnerWrapper>
      </SolutionMain>
      <SolutionStatus>
        {voteFlag ? (
          <TextWithIcon icon={<GiCycle style={{ marginRight: '0.4rem' }} />}>
            再投票する
          </TextWithIcon>
        ) : (
          <TextWithIcon icon={<FaPen style={{ marginRight: '0.4rem' }} />}>
            この解決策をベースに修正提案
          </TextWithIcon>
        )}
      </SolutionStatus>
    </SolutionCardWrapper>
  );
};

const SolutionTitle = styled.div`
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
const SolutionStatus = styled.div`
  color: gray;
  padding: 0.3rem 0;
  box-shadow: 0 -2px 5px lightgray;
  background-color: white;
  z-index: 15;
`;
const Heading = styled.h3`
  color: #555;
`;
const Text = styled.div`
  padding-left: 1rem;
  color: #333;
  margin-bottom: 3rem;
`;
const PreWrapText = styled.div`
  padding-left: 1rem;
  color: #333;
  margin-bottom: 3rem;
  white-space: pre-wrap;
`;

export default SolutionCard;
