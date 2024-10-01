import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';

export const Actions = styled.div<{ iconPosition?: 'preffix' | 'suffix' }>`
  display: flex;
  justify-content: space-between;
`;

export const ErrorWrapper = styled.div`
  padding: 12px;
  background-color: ${colors.white};
  border-radius: 4px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: ${typography.basic};
`;
