import React from 'react';

import { parseDate } from '../../utils';

import { Container } from './styles';

type QuoteProps = {
  content: string;
  author: string;
  date: string | Date;
};

const Quote: React.FC<QuoteProps> = ({content, author, date}) => {
  return (
    <Container>
      <p>{content}</p>
      <span aria-hidden />
      <p>{author}, {parseDate(date)}</p>
    </Container>
  );
}

export default Quote;