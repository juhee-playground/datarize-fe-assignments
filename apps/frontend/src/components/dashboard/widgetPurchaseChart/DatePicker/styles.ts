import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0 24px;
`;

export const PickerGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: flex-start;
`;

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const DateInput = styled.input`
  padding: 8px;
  ${typography.body};
`;

export const TimeInput = styled.input`
  padding: 8px;
  ${typography.body};
`;

export const Label = styled.label`
  display: block;
  color: ${colors.text.basic};
  ${typography.basic};
`;

export const Separator = styled.span`
  font-size: 18px;
`;
