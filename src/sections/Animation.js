import React from 'react';
import Butterfly from '../components/Butterfly';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 700px;
    margin-top: 50px;
`
const Animation = () => {
    return (
        <>
            <StyledWrapper>
                <Butterfly />
                <h2>Animacje</h2>
                <p>
                    Animacje przyciągają uwagę i pozwalają poprawić czytelność strony.
                    Mikro-interakcje zaskakują oraz zachęcają do wykonania określonych czynności.
                    Do tworzenia animacji wykorzystuję głownie CSS, SVG i/lub JavaScript,
                    chodź potrafię wykonać bardziej złożone rzeczy w plikach wideo przy pomocy
                    Adobe After Effects.
                </p>
            </StyledWrapper>
        </>
    );
}

export default Animation;