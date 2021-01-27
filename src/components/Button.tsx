//import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface ButtonProps {
  primary?: boolean;
  big?: boolean;
}

const Button = styled(Link)`
  background-color: ${({primary}: ButtonProps) => (primary ? "#000d1a" : "#CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  padding: ${({big}: ButtonProps) => (big ? '16px 40px' : '14px 24px')};
  color: ${({primary}: ButtonProps) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({big}: ButtonProps) => (big ? '20px' : '13px')};

  &:hover {
    transform: translateY(-2px)
  }
`;

export default Button;
