import React from 'react';

const Section = (props) => {
    return (
        <section id={props.id}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>

    );
}

export default Section;