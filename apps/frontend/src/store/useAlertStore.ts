import { create } from 'zustand'

interface IAlertState {
  isOpen: boolean
  type: TAlertType
  message: string
  duration?: number
  openAlert: (type: TAlertType, message: string, duration?: number) => void
  closeAlert: () => void
}

export const useAlertStore = create<IAlertState>(set => ({
  isOpen: false,
  type: 'info',
  duration: 3000,
  message: '',
  openAlert: (type, message, duration) => set({ isOpen: true, type, message, duration: duration }),

  closeAlert: () => set({ isOpen: false, message: '' }),
}))

export default useAlertStore
