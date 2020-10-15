import styled from 'styled-components';

export const Container = styled.form`
  max-width: 920px;
  margin: 40px auto;

  input {
    font-size: 24px;
    margin: 40px 0;
  }
  @media (max-width: 800px) {
    width: 100vw - 32px;
    margin: 40px 16px;
  }
`;

export const ButtonContainer = styled.span<{ visible: boolean }>`
  display: flex;
  justify-content: right;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.4s ease;
`;
