import React from 'react';

const Section = (props) => {
    return (
        <section id={props.id}>
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div>
                {props.animation}
            </div>

        </section>

    );
}

export default Section;

{ sectionList.slice(0, 1) }
<article>
    {sectionList.slice(1, 3)}
</article>
{ sectionList.slice(3) }

const sectionList = Content.map(section => (
    <Section key={Content.key} {...section} />
));