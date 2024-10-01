import React, { useState } from 'react';
import { TextFieldWrapper, InputLabel, InputContainer, InputIcon, StyledInput } from './TextField.styles';

type IProps = {
  label?: string;
  placeholder?: string;
  isIcon?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'preffix' | 'suffix';
};

export default function TextField({ label, placeholder, isIcon, icon, iconPosition }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <TextFieldWrapper>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <InputContainer iconPosition={iconPosition}>
        {isIcon && <InputIcon>{icon}</InputIcon>}
        <StyledInput type='text' placeholder={placeholder} value={inputValue} onChange={handleChange} />
      </InputContainer>
    </TextFieldWrapper>
  );
}
