import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { MainMenu, SubMenu } from '../../contstants/navigation';
import { MenuList } from '../../contstants/navigation';
import type { RootState } from '../../stores';
import { fontBlackHanSans } from '../../styles/common';
import type { Theme } from '../../styles/theme';
import ThemeToggle from '../items/ThemeToggle';

const navHeight = 56;

const container = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navHeight}px;
  box-shadow: ${theme.shadow} 0px 3px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const homeButton = (color: string) => css`
  position: absolute;
  left: 30px;
  text-align: left;
  color: ${color};
  ${fontBlackHanSans}
`;

const themeBox = css`
  position: absolute;
  right: 30px;
`;

const navArea = css`
  height: ${navHeight}px;
`;

const menuBox = css`
  height: 100%;
  width: calc(100% - 400px);
  display: flex;
  align-items: center;
`;

const mainMenuStyle = (isActive: boolean) => css`
  position: relative;
  cursor: pointer;
  font-size: 18px;
  font-weight: ${isActive ? 700 : 400};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  white-space: nowrap;
  :hover {
    font-weight: 700;
  }
`;

const subMenuBox = (isAcitive: boolean) => css`
  display: ${isAcitive ? 'flex' : 'none'};
  position: absolute;
  top: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  width: 130px;
  background-color: #ababab20;
`;

const subMenuStyle = (isActive: boolean) => css`
  font-size: 16px;
  font-weight: ${isActive ? 700 : 400};
  :hover {
    font-weight: 700;
  }
`;

const SubMenuBox = ({
  subMenus,
  isActive,
}: {
  subMenus: SubMenu[];
  isActive: boolean;
}) => {
  const router = useRouter();

  return (
    <ul css={subMenuBox(isActive)}>
      {subMenus.map(({ name, path }) => (
        <li key={path} css={subMenuStyle(router.pathname === path)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

const MainMenuItem = (props: MainMenu) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { name, subMenus, path } = props;

  return (
    <li
      css={mainMenuStyle(
        Boolean(
          subMenus?.some((subMenu) => subMenu.path === router.pathname),
        ) || path === router.pathname,
      )}
      onClick={() => {
        void router.push(subMenus?.[0].path || path!);
      }}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      {name}
      {subMenus && <SubMenuBox subMenus={subMenus} isActive={isActive} />}
    </li>
  );
};

const Navigation = () => {
  const theme = useSelector((state: RootState) => state.themes.theme);

  return (
    <>
      <header css={container(theme)}>
        <button css={homeButton(theme.buttonText)}>
          MY
          <br />
          PLAYGROUND
        </button>
        <ul css={menuBox}>
          {MenuList.map((mainMenu, index) => (
            <MainMenuItem key={index} {...mainMenu} />
          ))}
        </ul>
        <div css={themeBox}>
          <ThemeToggle />
        </div>
      </header>
      <div css={navArea} />
    </>
  );
};

export default Navigation;
