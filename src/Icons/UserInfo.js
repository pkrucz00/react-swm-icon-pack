import * as React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ color, secondaryColor, strokeWidth, size, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M20 13V9.5m0-2.49V7M8 15a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4h-4m0-12a4 4 0 103.5 2.062"
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
        d="M20 13V9.5m0-2.49V7m-4 0a4 4 0 11-8 0 4 4 0 018 0zM6.5 21h11a2.5 2.5 0 002.5-2.5c0-4.08-6-4-8-4s-8-.08-8 4A2.5 2.5 0 006.5 21z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path opacity={0.15} d="M12 11a4 4 0 100-8 4 4 0 000 8z" fill={color} />
      <path
        d="M20 13V9.5m0-2.49V7M8 15h8a4 4 0 014 4v2H4v-2a4 4 0 014-4zm8-8a4 4 0 11-8 0 4 4 0 018 0z"
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
        d="M20 13V9.5m0-2.49V7M8 15h8a4 4 0 014 4v2H4v-2a4 4 0 014-4zm8-8a4 4 0 11-8 0 4 4 0 018 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
  const TwoColor = () => (
    <g>
      <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" stroke={secondaryColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 13V9.5m0-2.49V7M8 15h8a4 4 0 014 4v2H4v-2a4 4 0 014-4z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

UserInfo.propTypes = {
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

UserInfo.displayName = 'SvgUserInfo';
export default UserInfo;