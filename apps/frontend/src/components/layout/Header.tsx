import { Header, AppBar, ActionButtons } from './Header.styles'

export default function Appbar() {
  return (
    <Header>
      <AppBar>
        <ActionButtons href="/">Home</ActionButtons>
        <ActionButtons href="/dashboard">Dashboard</ActionButtons>
      </AppBar>
    </Header>
  )
}
