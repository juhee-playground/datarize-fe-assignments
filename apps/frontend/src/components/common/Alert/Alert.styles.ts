import styled from 'styled-components'

import { progressLiner } from '@/styles/animations'
import { colors } from '@/styles/colors'

const DEFAULT_DURATION = 3000

export const AlertContainer = styled.div<{
  $type: TAlertType
}>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $type }) => colors[$type].lighter};
  color: ${({ $type }) => ($type === 'error' ? colors.error.default : colors.text.basic)};
`

export const Message = styled.span`
  flex-grow: 1;
  margin-right: 1rem;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
`

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  overflow: hidden;
`

export const Progress = styled.div<{ $type: TAlertType; $duration: number | undefined }>`
  width: 100%;
  height: 100%;
  background-color: ${({ $type }) => colors[$type].default};
  animation: ${progressLiner} ${({ $duration }) => $duration || DEFAULT_DURATION}ms linear;
`
