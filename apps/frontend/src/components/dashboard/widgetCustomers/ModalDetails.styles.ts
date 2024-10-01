import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  inset: 0px;
  z-index: 1300;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const ModalScrollPaper = styled.div`
  width: 800px;
  max-height: calc(100% - 64px);
  overflow-y: auto;
  background-color: red;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  background-color: ${colors.white};
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;

export const Content = styled.div`
  display: block;
  text-align: center;
  min-height: 400px;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 4px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;

  span {
    min-width: 100px;
  }
`;
