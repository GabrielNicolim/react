import GlobalStyle from './styles/global.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';
import Container from './components/Container';
import Card from './components/Card'; 
import { useCard } from './context/cardContext';

function App() {
  const { cards, search } = useCard();

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      
      <Header />

      <Container>
        {
          !cards.length && <div>Nenhum resultado encontrado</div>
        }

        {
          cards.map((props) => {
            return(
              <Card 
                key={ props.id } 
                company={ props.company }
                name={ props.name } 
                time={ props.time } 
                type={ props.type }
                locale={ props.locale } 
                tags={ props.tags }
                search={ search }
              />
            );
          })
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
