import { useEffect } from 'react'

import useAlertStore from '@/store/useAlertStore'

import { AlertContainer, Message, CloseButton, ProgressBar, Progress } from './Alert.styles'

const Alert = () => {
  const { isOpen, type, message, duration, closeAlert } = useAlertStore()

  useEffect(() => {
    if (!isOpen) return () => {}

    let timer: NodeJS.Timeout | undefined

    if (duration !== undefined) {
      timer = setTimeout(() => {
        closeAlert()
      }, duration)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [isOpen, closeAlert, duration])

  if (!isOpen) return null
  return (
    <AlertContainer $type={type}>
      <ProgressBar>
        <Progress $type={type} $duration={duration} />
      </ProgressBar>
      <Message>{message}</Message>
      <CloseButton onClick={closeAlert}>&times;</CloseButton>
    </AlertContainer>
  )
}

export default Alert
