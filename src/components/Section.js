import React from 'react';

const Section = (props) => {
    return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>

    );
}

export default Section;