import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const TextFieldWrapper = styled.div`
  /* width: 100%; */
`;

export const InputContainer = styled.div<{ iconPosition?: 'preffix' | 'suffix' }>`
  display: flex;
  background-color: ${colors.white};
  margin-bottom: 0;
  border-radius: 8px;
  width: 100%;
  position: relative;
  flex-flow: ${({ iconPosition }) => (iconPosition === 'suffix' ? 'row-reverse' : 'row')};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export const InputLabel = styled.label`
  font-size: 0.625rem;
  padding: 4px;
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${colors.text.basic};
  padding: 8px;
  margin-right: 4px;
`;

export const StyledInput = styled.input`
  background-color: ${colors.white};
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  width: 100%;
`;
