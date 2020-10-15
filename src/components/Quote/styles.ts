import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:first-child {
    font-size: 24px;
  }
  span {
    width: 240px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.black};
  }
  p:last-child {
    margin-top: 8px;
    font-size: 16px;
  }

`;
