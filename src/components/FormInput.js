import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 65px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.underscores};
    padding-bottom: 1.3rem;
`
const StyledInput = styled.input`
    display: block;
    font-family: "Poppins", sans-serif;
    width: 100%;
    height: 40px;
    background: transparent;
    font-weight: 500;
    font-size: 1.8rem;
    color: #555555;
    line-height: 1.2;
    padding: 0 5px;
    outline: none !important;
    border: none !important;
    &:focus + .focus::before {
        width: 100%;
    }
`
const Textarea = styled.textarea`
    display: block;
    font-family: "Poppins", sans-serif;
    width: 100%;
    height: 40px;
    background: transparent;
    font-weight: 500;
    font-size: 1.8rem;
    color: #555555;
    line-height: 1.2;
    padding: 9px 5px 13px;
    outline: none !important;
    border: none !important;
    min-height: 130px;
    &:focus + .focus::before {
        width: 100%;
    }
`

const Focus = styled.span`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        transition: all 0.4s;
        background: ${({ theme }) => theme.colors.secondary};
    }
`
const Label = styled.label`
    font-size: 1.5rem;
    color: #999999;
    line-height: 1.5;
    padding-left: 5px;
`

const Input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case ('input'):
            inputElement = <StyledInput {...props} />;
            break;
        case ('textarea'):
            inputElement = <Textarea {...props} />;
            break;
        default:
            inputElement = <StyledInput {...props} />;
    }

    return (
        <StyledWrapper>
            <Label htmlFor={props.id}>{props.label}</Label>
            {inputElement}
            < Focus className="focus" />
        </StyledWrapper>
    );
}

export default Input;