import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ArrowUpCircle = ({ color, secondaryColor, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 17V7l-4 4m8 0l-2-2M8 20.064A9 9 0 104.516 17"
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
        d="M12 7v10m0-10l4 4m-4-4l-4 4m13 1a9 9 0 11-18 0 9 9 0 0118 0z"
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
        d="M12 7v10m0-10l4 4m-4-4l-4 4m13 1a9 9 0 11-18 0 9 9 0 0118 0z"
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
        d="M12 7v10m0-10l4 4m-4-4l-4 4m13 1a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 7v10m0-10l4 4m-4-4l-4 4" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

ArrowUpCircle.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ArrowUpCircle.displayName = 'SvgArrowUpCircle';
export default createIcon(ArrowUpCircle);
