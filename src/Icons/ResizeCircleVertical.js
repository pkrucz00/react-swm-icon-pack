import * as React from 'react';
import PropTypes from 'prop-types';
import createIcon from '../helpers/createIcon';

const ResizeCircleVertical = ({ color, strokeWidth, set }) => {
  const Broken = () => (
    <g>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M9 14L12 17L15 14" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.5 8.5L9 10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 10L12 7" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </g>
  );
  const Curved = () => (
    <g>
      <path d="M9 14L12 17L15 14" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 10L12 7L9 10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Duotone = () => (
    <g>
      <path
        opacity="0.15"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        fill={color}
      />
      <path d="M9 14L12 17L15 14" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 10L12 7L9 10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );
  const Outline = () => (
    <g>
      <path d="M9 14L12 17L15 14" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 10L12 7L9 10" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
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
    default:
      return <Outline />;
  }
};

ResizeCircleVertical.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  set: PropTypes.string,
};

ResizeCircleVertical.displayName = 'ResizeCircleVertical';
export default createIcon(ResizeCircleVertical);