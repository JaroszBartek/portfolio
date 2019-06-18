import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';


const StyledLink = styled.a`
    display: block;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    line-height: 3;
`

const Contact = () => {
    return (
        <>
            <div>
                <h2>Kontakt</h2>
                <p>Zostań w kontakcie!</p>
                <address>
                    <StyledLink href="tel:+4873294553">+48 732 945 553</StyledLink>
                    <StyledLink href="mailto:jarosz.bartlomiej89@gmail.com">jarosz&#46;bartlomiej&#56;&#57;<wbr />&#64;gmail&#46;com</StyledLink>
                </address>
            </div>
            <div>
                <Form />
            </div>
        </>
    );
}

export default Contact;