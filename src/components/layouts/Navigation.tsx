import { css } from '@emotion/react';
// import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import type { RootState } from '../../stores';
import type { Theme } from '../../styles/theme';
import ThemeToggle from '../items/ThemeToggle';

const container = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  box-shadow: ${theme.shadow} 0px 3px 10px;
  @media (max-width: 1023px) {
  }
`;

const themeBox = css`
  position: absolute;
  top: 16px;
  right: 30px;
`;

const navArea = css`
  height: 60px;
`;

const Navigation = () => {
  const theme = useSelector((state: RootState) => state.themes.theme);
  // const router = useRouter();

  return (
    <>
      <header css={container(theme)}>
        <div css={themeBox}>
          <ThemeToggle />
        </div>
      </header>
      <div css={navArea} />
    </>
  );
};

export default Navigation;
