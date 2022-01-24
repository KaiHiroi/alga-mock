import { VFC } from 'react';
import { VoteWrapper } from '../Wrapper';
import { CircleButton } from '../buttons';
import { ImCross, ImHeart } from 'react-icons/im';
import { useSetRecoilState } from 'recoil';
import { solutionIdState, voteFlagState } from '../../atoms/modreq';

const Vote: VFC = () => {
  const setSolutionId = useSetRecoilState(solutionIdState);
  const increment = () => setSolutionId((c: number) => c + 1);
  const setVoteFlag = useSetRecoilState(voteFlagState);
  const vote = () => setVoteFlag(true);

  return (
    <VoteWrapper>
      <CircleButton _iconColor="#e55" onClick={increment}>
        <ImCross />
      </CircleButton>
      <CircleButton _iconColor="#6edc9a" onClick={vote}>
        <ImHeart />
      </CircleButton>
    </VoteWrapper>
  );
};

export default Vote;
