import { ReactNode } from 'react'

import Appbar from './Header'

interface IMainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
    </>
  )
}
