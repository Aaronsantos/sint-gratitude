import React from 'react';
import Menu from 'araceae-ui/build/Menu';
import { ThemeProvider } from 'araceae-ui';
import Pages from './pages';

const {
  REACT_APP_GRATITUDE_APP_NAME: gratitudeAppName,
  REACT_APP_GRATITUDE_URL: gratitudeUrl,
  REACT_APP_CONCEPTS_APP_NAME: conceptsAppName,
  REACT_APP_CONCEPTS_URL: conceptsUrl,
} = process.env;
const src: React.FC = () => {
  return (
    <ThemeProvider
      theme={{ colors: { white: '#EECFCA', brand: '#F2CC61' }, typography: {} }}
    >
      <Menu
        itens={[
          {
            name: gratitudeAppName!,
            href: gratitudeUrl!,
            selected: true,
          },
          {
            name: conceptsAppName!,
            href: conceptsUrl!,
            selected: false,
          },
        ]}
      />
      <Pages />
    </ThemeProvider>
  );
};

export default src;
