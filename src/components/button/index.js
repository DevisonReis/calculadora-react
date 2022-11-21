import React from 'react'
import { ContainerButton } from './styles';

const Button = ({label, onClick}) => {
  return (
    <ContainerButton onClick={onClick}>
      {label}
    </ContainerButton>
  )
}

export default Button;
