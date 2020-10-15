import { useState } from 'react';

import api from '../api';

const useQuotes = () => {
  const [input, setInput] = useState('');
  const createQuote = () => api.create({ data: input, date: new Date() });
  const deleteQuote = (id) => api.deleteItem(id);
  const getAll = () => api.getAll();
  const get = (id) => api.get(id);
  const getRandomQuote = () => api.getRandomItem();

  return {
    input,
    setInput,
    createQuote,
    deleteQuote,
    getAll,
    get,
    getRandomQuote,
  };
};

export default useQuotes;
