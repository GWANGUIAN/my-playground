import { css } from '@emotion/react';

import {
  responsiveGap,
  responsiveHeight,
  responsiveWidth,
} from '../../styles/common';

const container = css`
  display: flex;
  flex-direction: column;
  ${responsiveWidth(30)}
  ${responsiveGap(10)}
`;

const bar = css`
  width: 100%;
  ${responsiveHeight(5)}
  border-radius: 10px;
`;

const IconHamburger = () => (
  <div css={container}>
    <div css={bar} />
    <div css={bar} />
    <div css={bar} />
  </div>
);

export default IconHamburger;
