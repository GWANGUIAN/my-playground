import { css } from '@emotion/react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { MainMenu, SubMenu } from '../../contstants/navigation';
import { menuList } from '../../contstants/navigation';
import type { RootState } from '../../stores';
import type { Theme } from '../../styles/theme';

const container = (isOpen: boolean) => css`
  position: fixed;
  top: 56px;
  background-color: #ababab87;
  width: 100%;
  height: calc(100vh - 56px);
  z-index: 100;
  display: ${isOpen ? 'flex' : 'none'};
  backdrop-filter: blur(2px);
  @media (min-width: 1024px) {
    display: none;
  }
`;

const menuBox = (theme: Theme) => css`
  height: 100%;
  width: 300px;
  background-color: ${theme.background};
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const mainMenuStyle = (isActive: boolean) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 0;
  font-weight: ${isActive ? 700 : 400};
`;

const subMenuBox = (isOpen: boolean) => css`
  display: ${isOpen ? 'flex' : 'none'};
  flex-direction: column;
  padding: 10px 0 10px 10px;
`;

const subMenuStyle = (isActive: boolean) => css`
  font-size: 18px;
  cursor: pointer;
  ${!isActive && 'color: #ababab;'}
  font-weight: ${isActive ? 700 : 400};
`;

const SubMenuItem = (props: SubMenu) => {
  const { name, path } = props;
  const router = useRouter();

  return (
    <li
      css={subMenuStyle(path === router.pathname)}
      onClick={() => {
        void router.push(path);
      }}
    >
      {name}
    </li>
  );
};

interface MainMenuItemProps extends MainMenu {
  isOpen: boolean;
  handleOpen: () => void;
}

const MainMenuItem = (props: MainMenuItemProps) => {
  const { name, subMenus, isOpen, handleOpen, path } = props;
  const router = useRouter();

  return (
    <>
      <li
        onClick={() => {
          if (path) {
            void router.push(path);
          } else {
            handleOpen();
          }
        }}
        css={mainMenuStyle(isOpen)}
      >
        <span>{name}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </li>
      {subMenus && (
        <ul css={subMenuBox(isOpen)}>
          {subMenus.map((subMenu) => (
            <SubMenuItem {...subMenu} key={subMenu.name} />
          ))}
        </ul>
      )}
    </>
  );
};

interface Props {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: Props) => {
  const theme = useSelector((state: RootState) => state.themes.theme);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);

  return (
    <div css={container(isOpen)}>
      <ul css={menuBox(theme)}>
        {menuList.map((menu, index) => (
          <MainMenuItem
            key={index}
            {...menu}
            isOpen={index === openMenuIndex}
            handleOpen={() => {
              setOpenMenuIndex(index === openMenuIndex ? -1 : index);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
