import React from 'react';

interface Props {
  width: number;
  height: number;
}

const PlayStore: React.FC<Props> = (props) => {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 19.0833V4.91665C4.5 4.42498 4.78333 3.99165 5.2 3.79165L13.4083 12L5.2 20.2083C4.78333 20 4.5 19.575 4.5 19.0833ZM16.0083 14.6L7.04167 19.7833L14.1167 12.7083L16.0083 14.6ZM18.8 11.0083C19.0833 11.2333 19.2917 11.5833 19.2917 12C19.2917 12.4166 19.1083 12.75 18.8167 12.9833L16.9083 14.0833L14.825 12L16.9083 9.91665L18.8 11.0083ZM7.04167 4.21665L16.0083 9.39998L14.1167 11.2916L7.04167 4.21665Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlayStore;
