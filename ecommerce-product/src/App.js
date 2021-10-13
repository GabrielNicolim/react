import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage/ProductPage';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className='app'>
        <Header />
        <ProductPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
