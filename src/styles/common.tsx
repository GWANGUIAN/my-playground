import { css } from '@emotion/react';

const maxContainerWidth = 1920;

export const responsiveWidth = (
  width: number,
  containerWidth = maxContainerWidth,
) => css`
  width: min(${width}px, ${(width / containerWidth) * 100}vw);
`;

export const responsiveHeight = (
  height: number,
  containerWidth = maxContainerWidth,
) => css`
  height: min(${height}px, ${(height / containerWidth) * 100}vw);
`;

export const responsiveMargin = (
  top: number,
  bottom: number,
  left: number,
  right: number,
  containerWidth = maxContainerWidth,
) => css`
  margin: min(${top}px, ${(top / containerWidth) * 100}vw)
    min(${right}px, ${(right / containerWidth) * 100}vw)
    min(${bottom}px, ${(bottom / containerWidth) * 100}vw)
    min(${left}px, ${(left / containerWidth) * 100}vw);
`;

export const responsivePadding = (
  top: number,
  bottom: number,
  left: number,
  right: number,
  containerWidth = maxContainerWidth,
) => css`
  padding: min(${top}px, ${(top / containerWidth) * 100}vw)
    min(${right}px, ${(right / containerWidth) * 100}vw)
    min(${bottom}px, ${(bottom / containerWidth) * 100}vw)
    min(${left}px, ${(left / containerWidth) * 100}vw);
`;

export const responsiveFontSize = (
  fontSize: number,
  containerWidth = maxContainerWidth,
) => css`
  font-size: min(${fontSize}px, ${(fontSize / containerWidth) * 100}vw);
`;

export const responsiveLineHeight = (
  lineHeight: number,
  containerWidth = maxContainerWidth,
) => css`
  line-height: min(${lineHeight}px, ${(lineHeight / containerWidth) * 100}vw);
`;

export const responsiveBorderRadius = (
  borderRadius: number,
  containerWidth = maxContainerWidth,
) => css`
  border-radius: min(
    ${borderRadius}px,
    ${(borderRadius / containerWidth) * 100}vw
  );
`;

export const responsiveGap = (
  gap: number,
  containerWidth = maxContainerWidth,
) => css`
  gap: min(${gap}px, ${(gap / containerWidth) * 100}vw);
`;

export const fontBlackHanSans = css`
  font-family: 'Black Han Sans';
`;
