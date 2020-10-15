import React from 'react';
import { useHistory } from 'react-router-dom';
import { InputField, Button } from 'araceae-ui';

import useQuotes from '../../hooks/useQuotes';

import { Container, ButtonContainer } from './styles';

const QuoteInsert: React.FC = () => {
  const history = useHistory();
  const { input, setInput, createQuote } = useQuotes();

  const onChange = (e) => setInput(e.target.value);
  const onSubmit = () => {
    createQuote();
    history.push('/');
  };

  return (
    <Container onSubmit={onSubmit}>
      <h3>
        Qual a <span className="enphasis">gratidão</span> de hoje?
      </h3>
      <InputField value={input} onChange={onChange} />
      <ButtonContainer visible={Boolean(input)}>
        <Button type="submit">Expressar gratidão</Button>
      </ButtonContainer>
    </Container>
  );
};

export default QuoteInsert;
