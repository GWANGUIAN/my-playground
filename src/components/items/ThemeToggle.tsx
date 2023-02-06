import { css } from '@emotion/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../../stores';
import { changeTheme } from '../../stores/features/Themes';

const container = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const toggleBox = css`
  display: flex;
`;

const input = css`
  opacity: 0;
  width: 0;
  height: 0;
`;

const toggle = (isDarkMode: boolean) => css`
  position: relative;
  width: 50px;
  border-radius: 25px;
  background-color: #b5b5b5;
  display: flex;
  align-items: center;
  justify-content: ${isDarkMode ? 'flex-end' : 'flex-start'};
  padding: 3px 4px;
  cursor: pointer;
  > div {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${isDarkMode ? '#fff' : '#000'};
    transition: all 0.3s ease-in-out;
  }
`;

const ThemeToggle = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.themes);
  const dispatch = useDispatch();

  return (
    <div css={container}>
      <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      <label css={toggleBox}>
        <input
          type="checkbox"
          defaultChecked={!isDarkMode}
          onClick={() => {
            dispatch(changeTheme());
          }}
          css={input}
        />
        <div css={toggle(isDarkMode)}>
          <div />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
