import PropTypes from 'prop-types';

const Statistics = ({ positivePercentage, total, good, neutral, bad }) => {
  return (
    <ul>
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
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
