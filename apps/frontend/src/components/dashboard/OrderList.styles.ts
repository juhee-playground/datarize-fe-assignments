import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;

  background-color: ${colors.white};
  border-radius: 6px;

  span:first-child {
    min-width: 55px;
  }

  span:nth-child(2) {
    min-width: 80px;
  }
  span:last-child {
    min-width: 100px;
  }
`;
