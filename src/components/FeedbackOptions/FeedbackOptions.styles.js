import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
`;

export const OptionButton = styled.button`
  padding: 10px 20px;
  background-color: #35abde;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0c7fb0;
  }
`;
