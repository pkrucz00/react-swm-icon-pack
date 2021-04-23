import * as React from 'react';
import PropTypes from 'prop-types';

const HomeHospital = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M19 10v10H5m7-10v6m-3-3h1m5 0h-3m3.5-6.5L12 3l-7 7v6"
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
        d="M12 10v6m-3-3h6m3.439 7c.917 0 1.71-.627 1.834-1.537.117-.864.227-2.053.227-3.463 0-3 .169-4.832-3-8-1.461-1.461-3.094-2.581-4.197-3.26a2.474 2.474 0 00-2.605 0C9.594 4.42 7.96 5.54 6.5 7c-3.168 3.168-3 5-3 8 0 1.41.11 2.599.228 3.463.123.91.916 1.537 1.834 1.537h12.877z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M5 10l7-7 7 7v10H5V10z" fill={color} />
      <path d="M12 10v6m-3-3h6M12 3l-7 7v10h14V10l-7-7z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M12 10v6m-3-3h6M12 3l-7 7v10h14V10l-7-7z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 10v6m-3-3h6" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10l7-7 7 7v10H5V10z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
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

HomeHospital.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

HomeHospital.displayName = 'SvgHomeHospital';
export default HomeHospital;