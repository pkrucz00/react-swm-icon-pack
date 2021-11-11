import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ChevronUp = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M9 10L4 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 15L12 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M20 15L12 7L4 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M20 15L12 7L4 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M20 15L12 7L4 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );

  switch (set) {
    case 'broken':
      return <Broken />;
    case 'curved':
      return <Curved />;
    case 'duotone':
      return <Duotone />;
    case 'outline':
      return <Outline />;
    default:
      return <Outline />;
  }
};

ChevronUp.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ChevronUp.displayName = 'ChevronUp';
export default createIcon(ChevronUp);
