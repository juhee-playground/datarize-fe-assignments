import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.basic};
  padding: 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  gap: 12px;

  width: 50%;
  max-height: 84vh;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  border: ${colors.border.basic};
  font-size: 18px;
  color: ${colors.text.basic};
`;
