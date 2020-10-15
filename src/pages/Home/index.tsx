import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { assets, Button } from 'araceae-ui';

import Quote from '../../components/Quote';
import useQuotes from '../../hooks/useQuotes';

import { Container, HeroSection, QuoteSection, ButtonSection } from './styles';

const Home: React.FC = () => {
  const history = useHistory();
  const { getRandomQuote } = useQuotes();

  const [randomQuote, setRandomQuote] = useState<{
    data: string;
    date: Date;
  } | null>(null);

  useEffect(() => {
    const newRandomQuote = getRandomQuote();
    setRandomQuote(newRandomQuote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickButton = () => history.push('/add');

  return (
    <Container>
      <HeroSection>
        <span>
          <p className="enphasis">Gratidão</p>
          <p>É um exercício diário</p>
        </span>
        <img
          aria-hidden
          alt="Imagem mente grata"
          src={assets.FloatingHeadImg}
        />
      </HeroSection>
      <QuoteSection data-testid="quoteSection">
        {randomQuote && (
          <Quote
            author="você"
            date={randomQuote!.date}
            content={randomQuote!.data}
          />
        )}
      </QuoteSection>
      <ButtonSection>
        <Button type="button" onClick={onClickButton}>
          Expressar gratidão
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default Home;
