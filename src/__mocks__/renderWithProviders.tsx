import React from 'react';
import { ThemeProvider } from 'araceae-ui';

const renderWithProviders = (component) => (
  <ThemeProvider>{component}</ThemeProvider>
);

export default renderWithProviders;
