import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <h3 className={css.header}>{message}</h3>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
