import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import mockLocalStorage from '../../__mocks__/mockLocalStorage';
import withProviders from '../../__mocks__/renderWithProviders';

import Home from '.';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));

const mockData = { data: 'test quote', date: new Date() };

describe('Home page', () => {
  it('Should render expected elements', () => {
    mockLocalStorage({});
    const { getByText, getByAltText, getByRole, getByTestId } = render(
      withProviders(<Home />)
    );
    expect(getByText('Gratidão')).toBeVisible();
    expect(getByText('É um exercício diário')).toBeVisible();
    expect(getByAltText('Imagem mente grata')).toBeVisible();
    expect(getByRole('button')).toBeVisible();
    expect(getByTestId('quoteSection')).toBeEmpty();
  });

  it('Should render a random quote', async () => {
    const storageInstance = mockLocalStorage({ 1: JSON.stringify(mockData) });
    const { getByText, getByAltText, getByRole } = render(
      withProviders(<Home />)
    );
    expect(getByText('Gratidão')).toBeVisible();
    expect(getByText('É um exercício diário')).toBeVisible();
    expect(getByAltText('Imagem mente grata')).toBeVisible();
    expect(getByRole('button')).toBeVisible();

    setTimeout(() => {
      expect(getByText(mockData.data)).toBeInTheDocument();
      expect(storageInstance.getItem).toHaveBeenCalled();
    }, 1000);
  });

  it('Button should redirect to add page', () => {
    mockLocalStorage({ 1: JSON.stringify(mockData) });
    const { getByRole } = render(withProviders(<Home />));
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith('/add');
  });
});
