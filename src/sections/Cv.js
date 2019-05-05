import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'

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
`

const Cv = () => {
    return (
        <>
            <div>
                <Title>Cv</Title>
                <Button />
                <Description>
                    Zapraszam do obejrzenia mojego CV na GitHubie!
                </Description>
            </div>
        </>
    );
}

export default Cv;