import React from 'react';
import LogoAnimation from '../components/LogoAnimation';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 600px;
  padding: 2rem;
  `
const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 4px;
  ${({ theme }) => theme.media.tablet} {
    font-size: 4.5rem;
  }
  `
const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  line-height: 1.5;
  ${({ theme }) => theme.media.tablet} {
    font-size: 1.8rem;
  }
`
const Banner = () => {
  return (
    <Wrapper>
      <LogoAnimation />
      <Title>Digital Expression</Title>
      <Text>
        Jestem Front-End Developerem starającym się tworzyć wyjątkowe strony
        charakteryzujące się ekspresją oraz zapadające w pamięć. W swojej pracy
        zawszę patrzę na projekty oczami dziecka, aby oprócz estetyki dodać do nich
        odrobinę magii. Bardzo pomaga w tym wcześniejsze doświadczenie wyniesione z
        produkcji filmów i animacji.
                </Text>
    </Wrapper>
  );
}

export default Banner;