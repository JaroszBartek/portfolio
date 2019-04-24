import React from 'react';
import Section from './Section'

const content = [
    {
        id: 1,
        title: "Projektowanie",
        text: "Znam podstawy projektowania interfejsów witryn internetowych oraz grafiki wektorowej i rastrowej. Potrafię obsługiwać Adobe Experience Design XD, Adobe Photoshop i Adobe Ilustrator. Między innymi ta strona oraz moje CV zostały od podstaw zaprojektowane przeze mnie.",
    },
    {
        id: 2,
        title: "Kod",
        text: "W projektach wykorzystuję głównie HTML, CSS i JavaScript. Dbam, aby kod był czytelny i semantyczny, a strony wyświetlały się poprawnie na wszystkich urządzeniach. Dodatkowe narzędzia, które ułatwiają mi życie: SCSS, Git, Wordpress. Obecnie uczę się Reacta.",
    },
    {
        id: 3,
        title: "Animacje",
        text: "Animacje przyciągają uwagę i pozwalają poprawić czytelność strony. Mikro-interakcje zaskakują oraz zachęcają do wykonania określonych czynności. Do tworzenia animacji wykorzystuję głownie CSS, SVG i/lub JavaScript, chodź potrafię wykonać bardziej złożone rzeczy w plikach wideo przy pomocy Adobe After Effects.",
    },
    {
        id: 4,
        title: "Video",
        text: "Filmy to najlepszy sposób aby opowiedzieć historię i zatrzymać na dłużej użytkowników, którzy nie chcą zagłębiać się w treść. Od trzech lat tworzę materiały wideo, będąc odpowiedzialnym za każdy etap, od operowania kamerą po montaż i postprodukcję.",
    },
    {
        id: 5,
        title: "CV",
        text: "Zapraszam do obejrzenia mojego CV na GitHubie!",
    },
    {
        id: 6,
        title: "Kontakt",
        text: "Zostań w kontakcie! +48 732 945 553 jarosz.bartlomiej89@gmail.com",
    },
]

const Main = () => {

    const sectionList = content.map(section => (
        <Section key={content.id} {...section} />
    ));
    return (
        <main>
            <article>
                {sectionList.slice(0, 2)}
            </article>
            {sectionList.slice(2)}
        </main>
    );
}

export default Main;