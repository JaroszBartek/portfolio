import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.colors.underscores};
    margin: 40px;
    padding-top: 20px;
    color: $dark;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const StyledSvg = styled.div`
    width: 150px;
`
const Footer = () => {
    return (
        <StyledFooter>
            <StyledSvg >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 83.735" width="100%">
                    <path d="M99.18 6.021H40.5v9.804h.284v.284h14.493v14.777h.284v.285h45.042a3.82 3.82 0 0 1 3.836 3.836v14.35a3.82 3.82 0 0 1-3.836 3.837H64.795v.284h-.284v11.936h-11.65V53.478h-.285v-.284H40.498v.284-.284h-.284v.284h.284-.284v12.078h.284-.284.284v.284h11.794v11.793h.284v.285h46.463c16.624 0 29.98-13.499 29.98-29.981V36.144c.284-16.767-13.214-30.123-29.838-30.123zm-26.143 5.4v8.525H64.51V11.42zM40.64 53.477z" />
                    <path d="M29.416 27.334h16.198v16.198H29.416zM19.327 9.29h12.504v12.503H19.327zM1.85 21.509h9.378v9.377H1.851z" />
                    <path d="M174.63 24.635h-10.09" />
                    <path d="M208.02 54.615v-7.673c0-1.42-.142-2.841-.426-4.12-1.99-10.23-10.941-18.045-21.74-18.045H164.4c-12.22 0-22.166 9.946-22.166 22.165v8.81c0 12.22 9.946 22.166 22.166 22.166h21.455c10.799 0 19.75-7.673 21.74-17.904H193.1c-.569.853-1.563 1.421-2.558 1.421h-30.549c-1.705 0-2.984-1.278-2.984-2.984v-3.836zm-51.01-10.514c0-1.705 1.28-2.984 2.984-2.984h30.55c1.704 0 2.983 1.42 2.983 2.984v5.825H157.01z" />
                    <path d="M208.304 54.615h-.284m-.426 5.399H193.1" />
                </svg>
            </StyledSvg >
            <p>digital expression &copy; 2019</p>
        </StyledFooter>

    );
}

export default Footer;