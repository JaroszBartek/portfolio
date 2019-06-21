import React from 'react';
import styled from 'styled-components';
import Button from '../components/CvBtn'

const Title = styled.h3`
    margin: 0 auto;
    font-size: 8rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.secondary};
`
const Description = styled.p`
    color: ${({ theme }) => theme.colors.title};
    font-size: 2rem;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-align: center;
`
const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: start;
    ${({ theme }) => theme.media.tablet} {
        flex-direction: row;
    }
`
const ButtonWrapper = styled.div`
    margin:0 30px;
    display: flex;
    flex-direction: column;
  `

const Cv = () => {
    return (
        <>
            <StyledWrapper>
                <ButtonWrapper>
                    <Title>Cv</Title>
                    <Button>klik!</Button>
                </ButtonWrapper>
                <Description>
                    Zapraszam do obejrzenia mojego CV na GitHubie!
                </Description>
            </StyledWrapper>
        </>
    );
}

export default Cv;