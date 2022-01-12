import { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsClipboard } from 'react-icons/bs';
import { ButtonWithIcon as Props } from '../../types/Types';

const ButtonBoard: VFC<Props> = (props) => {
  const styles = props;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/board')}
      {...{ className: styles.button }}
    >
      <div {...{ className: styles.icon }}>
        <BsClipboard />
      </div>
      <div {...{ className: styles.text }}>board</div>
    </button>
  );
};

export default ButtonBoard;
