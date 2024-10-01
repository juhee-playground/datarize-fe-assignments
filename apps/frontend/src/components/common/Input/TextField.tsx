import React, { useEffect, useState } from 'react';
import { TextFieldWrapper, InputLabel, InputContainer, InputIcon, StyledInput } from './TextField.styles';

type IProps = {
  label?: string;
  placeholder?: string;
  isIcon?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'preffix' | 'suffix';
  value?: string | number | undefined;
  onChange?: (query: string) => void;
  onEnterKeyPress?: (query: string) => void;
};

export default function TextField({
  label,
  placeholder,
  isIcon,
  icon,
  iconPosition,
  value = '',
  onChange,
  onEnterKeyPress,
}: IProps) {
  const [inputValue, setInputValue] = useState<string>(value as string);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnterKeyPress) {
      onEnterKeyPress(event.currentTarget.value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  useEffect(() => {
    setInputValue(value as string);
  }, [value]);

  return (
    <TextFieldWrapper>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <InputContainer $iconPosition={iconPosition}>
        {isIcon && <InputIcon>{icon}</InputIcon>}
        <StyledInput
          type='text'
          autoComplete='off'
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
    </TextFieldWrapper>
  );
}
