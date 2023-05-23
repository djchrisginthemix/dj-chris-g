import React from 'react';
import { css } from '@emotion/react';
import { RiseLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  width: 400px;
`;

const LoadingSpinner = () => {
  return (
    <div className="sweet-loading bg-beige-light w-screen h-screen flex items-center justify-center">
      <RiseLoader css={override} color={"#fee101"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;