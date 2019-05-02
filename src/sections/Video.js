import React from 'react';
import styled from 'styled-components';


const Video = () => {
    return (
        <section>
            <div>
                <h2>Video</h2>
                <p>
                    Filmy to najlepszy sposób aby opowiedzieć historię i zatrzymać na dłużej
                    użytkowników, którzy nie chcą zagłębiać się w treść. Od trzech lat
                    tworzę materiały wideo, będąc odpowiedzialnym za każdy etap, od operowania
                    kamerą po montaż i postprodukcję.
                </p>
            </div>
            <div>
                <video width="500" height="280" muted loop autoplay>
                    <source src="video/splash.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
}

export default Video;