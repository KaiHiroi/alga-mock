import { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscDiff } from 'react-icons/vsc';
import { ButtonWithIcon as Props } from '../../types/Types';

const ButtonModReq: VFC<Props> = (props) => {
  const styles = props;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/modreq')}
      {...{ className: styles.button }}
    >
      <div {...{ className: styles.icon }}>
        <VscDiff />
      </div>
      <div {...{ className: styles.text }}>modreq</div>
    </button>
  );
};

export default ButtonModReq;
