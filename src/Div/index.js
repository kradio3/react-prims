import { createElement } from 'react';
import PropTypes from 'prop-types';

export const Div = ({
  component = 'div',
  innerRef,
  children,
  hidden = false,
  ...rest
}) => {

  if ( hidden ) {
    return null;
  }

  return createElement( component, {
    ref: innerRef,
    ...rest,
  }, children );
};

Div.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
};

export default Div;

