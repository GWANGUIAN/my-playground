import { css } from '@emotion/react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { MainMenu, SubMenu } from '../../contstants/navigation';
import { menuList } from '../../contstants/navigation';
import type { RootState } from '../../stores';
import { fontBlackHanSans } from '../../styles/common';
import type { Theme } from '../../styles/theme';
import MobileMenu from '../items/MobileMenu';
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
  z-index: 9999;
`;

const homeButton = (color: string) => css`
  position: absolute;
  left: 30px;
  text-align: left;
  color: ${color};
  ${fontBlackHanSans}
  @media(max-width: 1023px) {
    left: auto;
  }
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
  gap: 50px;
  @media (max-width: 1023px) {
    display: none;
  }
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
  background-color: #abababb3;
  gap: 15px;
`;

const subMenuStyle = (isActive: boolean) => css`
  font-size: 16px;
  font-weight: ${isActive ? 700 : 400};
  :hover {
    font-weight: 700;
  }
`;

const mobileToggleButton = (theme: Theme) => css`
  position: absolute;
  left: 15px;
  color: ${theme.buttonText};
  @media (min-width: 1024px) {
    display: none;
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
        <li
          key={path}
          css={subMenuStyle(router.pathname === path)}
          onClick={(e) => {
            void router.push(path);
            e.stopPropagation();
          }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

const MainMenuItem = (props: MainMenu) => {
  const { name, subMenus, path } = props;
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      css={mainMenuStyle(
        subMenus?.some((subMenu) => subMenu.path === router.pathname) ||
          path === router.pathname,
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
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header css={container(theme)}>
        <button
          css={mobileToggleButton(theme)}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faXmark : faBars}
            size="lg"
          />
        </button>
        <button
          css={homeButton(theme.buttonText)}
          onClick={() => {
            void router.push('/');
          }}
        >
          MY
          <br />
          PLAYGROUND
        </button>
        <ul css={menuBox}>
          {menuList.map((mainMenu, index) => (
            <MainMenuItem key={index} {...mainMenu} />
          ))}
        </ul>
        <div css={themeBox}>
          <ThemeToggle />
        </div>
      </header>
      <div css={navArea} />
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
};

export default Navigation;
