import React from 'react';
import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculadora() {
  return (
    <div>
      <Box m={5} />
      <Container maxWidth='xs'>
        <div className='wrapper'>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className='orange'>/</button>
          <button className='grey'>7</button>
          <button className='grey'>8</button>
          <button className='grey'>9</button>
          <button className='orange'>X</button>
          <button className='grey'>4</button>
          <button className='grey'>5</button>
          <button className='grey'>6</button>
          <button className='orange'>-</button>
          <button className='grey'>1</button>
          <button className='grey'>2</button>
          <button className='grey'>3</button>
          <button className='orange'>+</button>
          <button className='grey'>0</button>
          <button className='grey'>,</button>
          <button>=</button>
        </div>
      </Container>
    </div>
    
  )
}
