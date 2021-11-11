import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ChevronSmallLeft = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path d="M11.5 9.5L14 7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14 17L9 12" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M14 7L9 12L14 17" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Duotone = () => (
    <g>
      <path d="M14 7L9 12L14 17" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M14 7L9 12L14 17" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />{' '}
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

ChevronSmallLeft.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ChevronSmallLeft.displayName = 'ChevronSmallLeft';
export default createIcon(ChevronSmallLeft);