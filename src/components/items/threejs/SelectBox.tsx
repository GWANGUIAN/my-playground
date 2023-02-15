import { css, keyframes } from '@emotion/react';
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import type { DataConfig } from '../../../contstants/threejs';
import { responsivePadding } from '../../../styles/common';

const optionBox = css`
  display: flex;
  ${responsivePadding(15, 15, 10, 15)}
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background: #0000001a;
    border-radius: 4px;
  }
`;

const checkBox = (isActive: boolean) => css`
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid #00000051;
  border-radius: 50%;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${isActive ? '#00000051' : 'none'};
  }
`;

const container = (width: number) => css`
  display: flex;
  flex-direction: column;
  ${responsivePadding(10, 10, 5, 5)}
  width: ${width}px;
  border: 1px solid #0000001a;
  border-radius: 5px;
  background: #0000001a;
`;

const titleStyle = css`
  display: flex;
  justify-content: space-between;
  ${responsivePadding(10, 10, 15, 15)}
  font-weight: 800;
  cursor: pointer;
`;

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const listBox = (isVisible: boolean) => css`
  display: ${isVisible ? 'flex' : 'none'};
  flex-direction: column;
  max-height: 500px;
  overflow-y: auto;
  animation: ${fadeDown} 0.3s ease-in-out;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: #88888872;
    border-radius: 10px;
    width: 3px;
  }
`;

interface OptionProps {
  label: string;
  onSelect: () => void;
  isSelected: boolean;
}

const Option = (props: OptionProps) => {
  const { label, onSelect, isSelected } = props;

  return (
    <li onClick={onSelect} css={optionBox}>
      <div css={checkBox(isSelected)} />
      <span>{label}</span>
    </li>
  );
};

interface Props<T> {
  title: string;
  value: DataConfig<T>;
  onChange: (value: DataConfig<T>) => void;
  options: Array<DataConfig<T>>;
  width?: number;
}

const SelectBox = <T,>(props: Props<T>) => {
  const { title, value, onChange, options, width = 250 } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={container(width)}>
      <h2
        css={titleStyle}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{title}</span>
        <FontAwesomeIcon
          icon={isOpen ? faCircleChevronDown : faCircleChevronUp}
        />
      </h2>
      <ul css={listBox(isOpen)}>
        {options.map((option, index) => (
          <Option
            key={index}
            label={option.label}
            onSelect={() => {
              onChange(option);
            }}
            isSelected={value.value === option.value}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
