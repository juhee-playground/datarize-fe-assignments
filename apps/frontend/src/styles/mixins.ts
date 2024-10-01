import { css } from 'styled-components';

import { colors } from '@/styles/colors';

export const containerBasicCol = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 0;
`;

export const containerFlexCol = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 0;
`;

export const containerFlexRow = css`
  display: flex;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - var(--gnb-width));
  padding: 12px 0;
  gap: 8px;
`;

export const flexPowerCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const borderBoxContainer = css`
  margin: 0;
  padding: 0.5rem;
  border: solid 1px ${colors.border.black};
  border-radius: 0.5rem;
  box-sizing: border-box;
`;

export const NoDragItem = css`
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
`;
