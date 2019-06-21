import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Icon from '../components/SvgIcons';

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    line-height: 3;
`
const StyledWrapper = styled.div`
    width: 100%;
    position: relative;
`

const StyledParagraph = styled.p`
font-size: 2.4rem;
position: relative;
margin: 0 20px 0 0;
::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scalex(0);
    transform-origin: left;
    transition: all 0.4s;
    background: ${({ theme }) => theme.colors.secondary};
    }
    ${StyledLink}:hover & {
        ::before {
            transform: scalex(1.1);
        }
        
    }   
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
                    <div>
                        <StyledLink href="https://github.com/JaroszBartek">
                            <StyledParagraph>Github</StyledParagraph>
                            <Icon name='github' width='40px' fill='#606060' />
                        </StyledLink>
                        <StyledLink href="linkedin.com/in/bartłomiej-jarosz-47964797">
                            <StyledParagraph>Linkedin</StyledParagraph>
                            <Icon name='linkedin' width='40px' fill='#606060' />
                        </StyledLink>
                    </div>
                </address>
            </div>
            <StyledWrapper>
                <Form />
            </StyledWrapper>
        </>
    );
}

export default Contact;