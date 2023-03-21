import dynamic from 'next/dynamic';

const Anime = dynamic(() => import('react-anime'), { ssr: false });
import { css } from '@emotion/react';

// import anime from 'animejs';
import Navigation from '../../components/layouts/Navigation';

const container = css`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden; */
  overflow: hidden;
`;

const colors = ['blue', 'green', 'red', 'orange', 'yellow'];

const colorBox = (color: string) => css`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: ${color};
  border-radius: 50%;
`;

const Animejs = () => (
  <>
    <Navigation />
    <div css={container}>
      <Anime
        easing="easeOutElastic"
        loop={true}
        duration={1000}
        direction="alternate"
        delay={(_: unknown, index: number) => index * 240}
        translateX="100px"
        scale={[0.1, 1]}
      >
        {colors.map((color, i) => (
          <div key={i} css={colorBox(color)} />
        ))}
      </Anime>
    </div>
  </>
);

export default Animejs;
