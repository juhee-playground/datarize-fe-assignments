import { BrowserRouter } from 'react-router-dom';

import Alert from '@/components/common/Alert';
import MainLayout from '@/components/layout/Main';
import Router from '@/router';
import GlobalStyle from '@/styles/global-styles';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainLayout>
        <Router />
      </MainLayout>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
