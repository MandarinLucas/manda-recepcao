import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Background({ className }) {
  return (
    <img src="images/bg2.png"/>
  );
}

Background.propTypes = {
  className: PropTypes.string.isRequired,
};

const BackgroundInputs = styled(Background)`
  margin: auto;
  display: block;
  width: 400px;
  height: auto;
  @media screen and (max-width: 500px) {
    margin: 0;
    width: 300px;
  }
`;

export default BackgroundInputs;
