import React from 'react';
import styled from 'styled-components';

const StyledSubmit = styled.button`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 160px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 25px;
  color: #ffffff;
  line-height: 1.2;
  transition: all 0.4s;
  box-shadow: 0 10px 30px 0px rgba(239,104,100, 0.5);
  &:hover,
  &:active {
    opacity: 0.9;
    transform: scale(1.06);
  }
`

const Submit = (props) => {
  return (
    <StyledSubmit>{props.children}</StyledSubmit>
  );
}

export default Submit;