import styled, { css } from 'styled-components';
import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
import { darkenColor, getBrightness, getCustomColor, getRgbaColor } from '@/utils/color';

const buttonStyles = {
  contained: css<{ $color?: string }>`
    background-color: ${({ $color }) => getCustomColor($color)};
    color: ${({ $color }) => (getBrightness(getCustomColor($color)) > 128 ? colors.black : colors.white)};
  `,
  outlined: css<{ $color?: string }>`
    background-color: inherit;
    border: 1px solid ${({ $color }) => getCustomColor($color)};
    color: ${({ $color }) => getCustomColor($color)};
  `,
  text: css<{ $color?: string }>`
    background-color: inherit;
    border: none;
    color: ${({ $color }) => getCustomColor($color)};
  `,
  fab: css<{ $color?: string }>`
    background-color: inherit;
    border: 1px solid ${({ $color }) => getCustomColor($color)};
    color: ${({ $color }) => getCustomColor($color)};
    width: 36px;
    padding: 0;
    border-radius: 50%;
  `,
};

export const StyledButton = styled.button<{
  $variant: TButtonVariant;
  $selected?: boolean;
  $color?: string;
  $block?: boolean;
}>`
  border-radius: 4px;
  padding: 0.5em 0.8em;
  font-size: ${typography.body.fontSize};
  font-weight: ${typography.body.fontWeight};
  font-family: ${typography.fontFamily};
  cursor: pointer;
  transition: background-color 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;

  ${({ $variant }) => buttonStyles[$variant]}

  ${({ $block }) =>
    $block &&
    css`
      display: block;
      width: 100%;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover:not(:disabled) {
    background-color: ${({ $variant, $color }) =>
      $variant === 'contained' ? darkenColor(getCustomColor($color), 20) : getRgbaColor(getCustomColor($color), 0.1)};
    border-color: ${({ $variant, $color }) => $variant === 'outlined' && darkenColor(getCustomColor($color), 20)};
    color: ${({ $variant, $color }) => $variant !== 'contained' && getCustomColor($color)};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `}
`;
