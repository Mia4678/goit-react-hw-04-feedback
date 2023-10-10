import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styles';
import React from 'react';

function Section({ title, children }) {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
