import React from 'react'
import styled from 'styled-components'
import useCounter from '../components/UseCounter'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  const [count, increment,decrement, reset] = useCounter(10, 5)
  return (
    <Container>
      <Title>Счетчик: {count}</Title>
      <Button onClick={increment}>Увеличить</Button>
      <Button onClick={decrement}>Уменьшить</Button>
      <Button onClick={reset}>Сбросить</Button>
    </Container>
  )
}

export default Home