import { StatsContainer, StatItem } from './Statistics.styles';
import PropTypes from 'prop-types';
import React from 'react';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatsContainer>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {positivePercentage.toFixed(2)}%</StatItem>
    </StatsContainer>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
