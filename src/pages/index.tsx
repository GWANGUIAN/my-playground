import { css } from '@emotion/react';

import Navigation from '../components/layouts/Navigation';

const title = css`
  font-size: 50px;
  text-align: center;
`;

const Home = () => (
  <>
    <Navigation />
    <h1 css={title}>my-playground</h1>
  </>
);

export default Home;
