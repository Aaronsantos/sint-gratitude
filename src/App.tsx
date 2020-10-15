import React from 'react';
import Menu from 'araceae-ui/build/Menu';
import { ThemeProvider } from 'araceae-ui';
import Pages from './pages';
// import { Container } from './styles';

const src: React.FC = () => {
  return (  
  <ThemeProvider theme={{ colors: { white: '#EECFCA', brand: '#F2CC61'}, typography: {} }}>
    <Menu itens={[{ name: 'Gratidão', href: '/', selected: true}, { name: 'Conceitos', href: '/', selected: false}]} />
    <Pages />
  </ThemeProvider>
  );
}

export default src;