import * as React from 'react';
import PropTypes from 'prop-types';

const ArrowDownCircle = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 7v10l4-4m-8 0l2 2m6-11.064A9 9 0 1019.485 7"
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
        d="M12 17V7m0 10l-4-4m4 4l4-4M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill={color} />
      <path
        d="M12 17V7m0 10l-4-4m4 4l4-4M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path
        d="M12 17V7m0 10l-4-4m4 4l4-4M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 17V7m0 10l-4-4m4 4l4-4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ArrowDownCircle.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ArrowDownCircle.displayName = 'SvgArrowDownCircle';
export default ArrowDownCircle;