import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ positivePercentage, total, good, neutral, bad }) => {
  return (
    <ul className={css.Statistics}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
