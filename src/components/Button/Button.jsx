import { PropTypes } from 'prop-types';
import css from './Button.module.css';

export const Button = ({ title, type = 'button', onClick = null }) => {
  return onClick ? (
    <button type={type} className={css.Button} onClick={onClick}>
      {title}
    </button>
  ) : (
    <button type={type} className={css.Button}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
