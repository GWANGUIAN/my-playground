import dynamic from 'next/dynamic';

const Anime = dynamic(() => import('react-anime'), { ssr: false });
import { css } from '@emotion/react';
import anime from 'animejs';

import Navigation from '../../components/layouts/Navigation';

const colors = ['blue', 'green', 'red'];

const colorBox = (color: string) => css`
  width: 100px;
  height: 100px;
  background-color: ${color};
`;

const Animejs = () => (
  <>
    <Navigation />
    <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
      {colors.map((color, i) => (
        <div key={i} css={colorBox(color)} />
      ))}
    </Anime>
  </>
);

export default Animejs;
