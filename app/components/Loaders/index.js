import React from 'react';

export const Circle = ({ fill = '#ffffff', opacity = 1, width = '70px', height = '70px', ...props }) => ( //eslint-disable-line
  <svg width={width} height={height} viewBox="0 0 128 128" {...props}>
    <g>
      <path
        fill={fill}
        fillOpacity={opacity}
        d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"
      />
      <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="960ms" repeatCount="indefinite"></animateTransform>
    </g>
  </svg>
);

export const Loading = ({ fill = '#333333', width = '24px', height = '30px', ...props }) => ( //eslint-disable-line
  <svg width={width} height={height} viewBox="0 0 24 30" style={{ enableBackground: 'new 0 0 50 50' }} {...props}>
    <rect x="0" y="0" width="4" height="10" fill={fill}>
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="10" y="0" width="4" height="10" fill={fill}>
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="20" y="0" width="4" height="10" fill={fill}>
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

export default { Loading, Circle };
