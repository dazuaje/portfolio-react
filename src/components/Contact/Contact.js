import React from 'react';

import './Contact.scss';
const Contact = () => {
    return (
        <section className='contact'>

            <div className="contact--title">Contact</div>
            <div className="contact--description">You can contact me by sending an email through my social networks.
                I look forward to your message!!!</div>


            <div className="contact__form__section">
                <form id="form" className='contact__form'>

                    <div className="contact__form__name__container">
                        <label className="contact__form__name--label" for="name">Name:</label>
                        <input name='name' id='name' className='contact__form__name--input' required type="text" />
                    </div>



                    <div className="contact__form__email__container">
                        <label className="contact__form__email--label" for="email">Email:</label>
                        <input id="email" name='email' className='contact__form__email--input' required type="text" />
                    </div>



                    <div className="contact__form__message__container">

                        <label className="contact__form__message--label" for="message">Message:</label>
                        <textarea placeholder="" required id="message" className="contact__form__message--input" name="message" cols="31" rows="10"></textarea>
                    </div>


                    <button type="submit" className="contact--send">Enviar</button>

                </form>









                <div class="contact__info__section">

                    <ul class="contact__info__list">
                        <li class="contact__info__list--item"><span class="contact-text place">Buenos Aires, Argentina</span></li>

                        <li class="contact__info__list--item"><span class="contact-text phone">+54 9 11 7153 5651</span></li>

                        <li class="contact__info__list--item"><span class="contact-text gmail">davidazuaje1084@gmail.com</span></li>

                    </ul>


                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                </div>

            </div>



        </section >
    )
}

export default Contact