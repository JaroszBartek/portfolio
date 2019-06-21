import React from 'react';
import styled from 'styled-components';

const StyledVideo = styled.video`
    box-shadow: 10px 10px 40px rgba(0,0,0,.3);
    width: 100%;
    height: auto;
    max-width: 500px 
`
const VideoWrapper = styled.div`
    justify-self: end;
`
const StyledWrapper = styled.div`
    max-width: 600px;
${({ theme }) => theme.media.tablet} {
    grid-row: 2;
    grid-column: 2;
    justify-self: start;
}
`
const Video = () => {
    return (
        <>
            <VideoWrapper>
                <StyledVideo muted loop autoPlay>
                    <source src="../../video/splash.mp4" type="video/mp4" />
                </StyledVideo>
            </VideoWrapper>
            <StyledWrapper>
                <h2>Video</h2>
                <p>
                    Filmy to najlepszy sposób aby opowiedzieć historię i zatrzymać na dłużej
                    użytkowników, którzy nie chcą zagłębiać się w treść. Od trzech lat
                    tworzę materiały wideo, będąc odpowiedzialnym za każdy etap, od operowania
                    kamerą po montaż i postprodukcję.
                </p>
            </StyledWrapper>
        </>
    );
}

export default Video;