import { BrowserRouter } from 'react-router-dom'

import MainLayout from '@/components/layout/Main'
import Router from '@/router'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
