import * as React from 'react';
import PropTypes from 'prop-types';

const ListLeft = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M7 8h5m5 0h-2m-8 4h10m-6 4h6m-5 4H4V4h16v16h-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Curved = () => (
    <g>
      <path
        d="M8 8h8m-8 4h8m-4 4h4M3.5 12c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5-2 8.5-8.5 8.5-8.5-2-8.5-8.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M20 4H4v16h16V4z" fill={color} />
      <path d="M7 8h10M7 12h10m-6 4h6M4 4h16v16H4V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M7 8h10M7 12h10m-6 4h6M4 4h16v16H4V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M7 8h10M7 12h10m-6 4h6" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4h16v16H4V4z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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
    case 'twocolor':
      return <TwoColor />;
    default:
      return <Outline />;
  }
};

ListLeft.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ListLeft.displayName = 'SvgListLeft';
export default ListLeft;