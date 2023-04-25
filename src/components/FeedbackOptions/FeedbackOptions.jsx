import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonSet}>
      {Object.keys(options).map(item => (
        <li key={item} className={css.buttonSetItem}>
          <button
            onClick={onLeaveFeedback}
            className={css.feedbackButton}
            name={item}
            type="button"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};
