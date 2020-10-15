import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import mockLocalStorage from '../../__mocks__/mockLocalStorage';
import withProviders from '../../__mocks__/renderWithProviders';

import QuoteInsert from '.';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));

const mockData = { data: 'test quote', date: new Date() };

describe('Quote Insertion page', () => {
  it('Should render expected elements', () => {
    mockLocalStorage({});
    const { getByRole } = render(withProviders(<QuoteInsert />));
    expect(getByRole('heading')).toBeVisible();
    expect(getByRole('textbox')).toBeVisible();
    expect(getByRole('button')).toBeVisible();
  });

  it('Should call localStorage to add an quote and redirect to home', () => {
    const storageInstance = mockLocalStorage({});
    const { getByRole } = render(withProviders(<QuoteInsert />));

    const button = getByRole('button');
    const textArea = getByRole('textbox');
    const passedValue = 'test text input';

    fireEvent.change(textArea, { target: { value: passedValue } });
    fireEvent.submit(button);
    setTimeout(() => {
      expect(storageInstance.setItem).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith('/');
    }, 500);
  });
});
