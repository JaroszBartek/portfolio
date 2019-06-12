import React, { Component } from 'react';
import styled from 'styled-components';
import Submit from './SubmitBtn';
import Input from './FormInput';


const StyledWrapper = styled.div`
    width: 90%;
    border-radius: 10px;
    padding: 50px 15px 30px;
    position: relative;
    border: 1px solid #ececec;
    box-shadow: -1px 9px 19px -8px rgba(0, 0, 0, .49);
    opacity: 1;
    visibility: visible;
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
    span {
        position: relative;
        width: 22px;
        height: 20px;
        overflow: hidden;
    }
    span::before,
    span::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        background: #000;
    }
    span::before {
        transform: rotate(45deg);
      }
    span::after {
        transform: rotate(-45deg)
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
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <StyledWrapper>
                <CloseBtn type="button">
                    <span></span>
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
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Input id="message"
                        inputType="textarea"
                        placeholder="Jak mogę Ci pomóc"
                        label="Wiadomość"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Submit>Wyślij</Submit>
                </form>
            </StyledWrapper>
        );
    }
}

export default Form;