import { ReactNode } from 'react';

import { StyledButton } from './Button.styles';

interface IButtonProps {
  children: ReactNode;
  type?: TButtonType;
  variant?: TButtonVariant;
  color?: string;
  selected?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  block?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  type = 'button',
  variant = 'contained',
  color,
  block = false,
  disabled,
  selected,
  autoFocus = false,
  onClick,
}: IButtonProps) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      $variant={variant}
      $color={color}
      $selected={selected}
      $block={block}
      autoFocus={autoFocus}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
