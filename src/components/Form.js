import React, { Component } from 'react';
import styled from 'styled-components';
import Submit from './SubmitBtn';
import Input from './FormInput';
import Open from './OpenBtn';


const StyledWrapper = styled.div`
    width: 90%;
    position: relative;
    border-radius: 10px;
    padding: 50px 15px 30px;
    border: 1px solid #ececec;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: -1px 9px 19px -8px rgba(0, 0, 0, .49);
    opacity: ${({ formOpen }) => formOpen ? '1' : '0'};
    visibility: ${({ formOpen }) => formOpen ? 'visible' : 'hidden'};
    transition: all .2s
`
const CloseBtn = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    top: -20px;
    right: -20px;
    background: ${({ theme }) => theme.colors.primary};
    outline: none;
    border: 1px solid #ececec;
    box-shadow: -1px 9px 19px -8px rgba(0, 0, 0, .49);
    border-radius: 50%;
    transition: all .2s;
    `
const StyledSpan = styled.span`
        position: relative;
        width: 22px;
        height: 20px;
        overflow: hidden;
        transform: scale(1);
        transition: all .2s;
        &::before,
        &::after {
            content: "";
            position: absolute;
            height: 2px;
            width: 100%;
            top: 50%;
            left: 0;
            margin-top: -1px;
            background: #000000;
            transition: all .2s;
        }
        &::before {
            transform: rotate(45deg);
        }
        &::after {
            transform: rotate(-45deg);
        }
        ${CloseBtn}:hover & {
            transform: scale(1.2);
        }   
`
const Title = styled.span`
    display: block;
    width: 100%;
    font-size: 3.9rem;
    font-weight: bold;
    color: #333333;
    line-height: 1.2;
    text-align: left;
    padding-bottom: 44px;
`

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        formOpen: false,
    }

    handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    toggleForm = () => {
        this.setState({
            formOpen: !this.state.formOpen
        })
    }
    render() {
        return (
            <>
                <Open toggleForm={this.toggleForm} formOpen={this.state.formOpen} />
                <StyledWrapper formOpen={this.state.formOpen}>
                    <CloseBtn onClick={this.toggleForm}>
                        <StyledSpan />
                    </CloseBtn>
                    <form onSubmit={this.handleSubmit}>
                        <Title>Hello!</Title>
                        <Input id="name"
                            inputType="input"
                            type="text"
                            placeholder="Przedstaw się"
                            label="Imię"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <Input id="email"
                            inputType="input"
                            type="email"
                            placeholder="Podaj adres email"
                            label="Email"
                            required="required"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <Input id="message"
                            inputType="textarea"
                            placeholder="Jak mogę Ci pomóc"
                            label="Wiadomość"
                            required="required"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <Submit>Wyślij</Submit>
                    </form>
                </StyledWrapper>
            </>
        );
    }
}

export default Form;