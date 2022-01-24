import { VFC } from 'react';
import { VoteWrapper } from '../Wrapper';
import { CircleButton } from '../buttons';
import { ImCross, ImHeart } from 'react-icons/im';

const Vote: VFC<{ increment: () => void; vote: () => void }> = (props) => {
  return (
    <VoteWrapper>
      <CircleButton _iconColor="#e55" onClick={props.increment}>
        <ImCross />
      </CircleButton>
      <CircleButton _iconColor="#6edc9a" onClick={props.vote}>
        <ImHeart />
      </CircleButton>
    </VoteWrapper>
  );
};

export default Vote;
