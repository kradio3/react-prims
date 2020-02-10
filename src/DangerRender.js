/**
 *
 * DangerRender
 *
 **/

import React from 'react';
import PropTypes from 'prop-types';

const DangerRender = ({children, ...props}) => (
  <div 
    dangerouslySetInnerHTML={{__html: children}}
    {...props}
  />
);

DangerRender.propTypes = {
  children: PropTypes.node,
};

export default DangerRender;
