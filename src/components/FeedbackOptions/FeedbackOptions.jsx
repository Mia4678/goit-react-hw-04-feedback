import React from 'react';
import { OptionsContainer, OptionButton } from './FeedbackOptions.styles';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <OptionButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </OptionButton>
      ))}
    </OptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
