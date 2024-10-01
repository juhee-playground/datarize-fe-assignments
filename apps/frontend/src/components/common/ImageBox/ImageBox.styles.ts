import styled from 'styled-components';

import { spin } from '@/styles/animations';
import { colors } from '@/styles/colors';

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${colors.primary};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spin} 1s linear infinite;
`;
