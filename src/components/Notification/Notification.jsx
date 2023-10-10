import { Info } from './Notification.styles';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Info>{message}</Info>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
