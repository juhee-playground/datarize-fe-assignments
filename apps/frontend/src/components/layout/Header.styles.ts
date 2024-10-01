import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--gnb-height);
`

export const AppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0.5rem 0;
`

export const ActionButtons = styled.a`
  border-radius: 0.5rem;
  padding: 0.75rem;
`
