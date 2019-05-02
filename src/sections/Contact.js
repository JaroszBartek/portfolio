import React from 'react';
import styled from 'styled-components';


const Contact = () => {
    return (
        <section>
            <div>
                <h2>Kontakt</h2>
                <address class="section__content">
                    <p>Zostań w kontakcie!</p>
                    <a href="tel:+4873294553">+48 732 945 553</a>
                    <a href="mailto:jarosz.bartlomiej89@gmail.com">jarosz.bartlomiej89<wbr />@gmail.com </a>
                </address>
            </div>
            <div>
                <button type="button" aria-label="open-form" class="contact__btn--show">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.117 382.117">
                        <path d="M336.764 45.945H45.354C20.346 45.945 0 65.484 0 89.5v203.117c0 24.016 20.346 43.555 45.354 43.555h291.41c25.008 0 45.353-19.539 45.353-43.555V89.5c0-24.016-20.345-43.555-45.353-43.555zm0 251.775H45.354c-3.676 0-6.9-2.384-6.9-5.103V116.359l131.797 111.27a15.014 15.014 0 0 0 9.676 3.538l22.259.001c3.536 0 6.974-1.257 9.677-3.539l131.803-111.274v176.264c-.002 2.717-3.227 5.101-6.902 5.101zM191.059 192.987L62.87 84.397h256.378l-128.189 108.59z" fill="#FFF" />
                    </svg>
                </button>
                <div class="contact-box">
                    <button type="button" aria-label="close-form" class="contact__btn--close">
                        <span class="close-icon"></span>
                    </button>
                    <form class="contact" action="https://formspree.io/jarosz.bartlomiej89@gmail.com" method="POST">
                        <span class="contact__title">Hello!</span>
                        <div class="contact__input">
                            <label for="name" class="input-label">Imię</label>
                            <input class="input-text" type="text" id="name" name="name" placeholder="Przedstaw się" required />
                            <span class="input--focus"></span>
                        </div>
                        <div class="contact__input">
                            <label for="email" class="input-label">Email</label>
                            <input class="input-text" type="email" id="email" name="email" placeholder="Podaj adres email" required />
                            <span class="input--focus"></span>
                        </div>
                        <div class="contact__input">
                            <label for="message" >Wiadomość</label>
                            <textarea id="message" name="message" placeholder="Jak mogę Ci pomóc?"></textarea>
                            <span></span>
                        </div>
                        <button>Wyślij!</button>
                    </form>
                </div>
            </div>
        </section >
    );
}

export default Contact;