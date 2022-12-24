import React, { useRef } from "react";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { toast, Toaster } from "react-hot-toast"

import emailjs from '@emailjs/browser';
import "./Contact.scss";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jozz40i', 'template_57jxmxw', form.current, 'KPUuEJWeYID_XQDxE')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
       toast.success("Successfull");
      }, (error) => {
        console.log(error.text);
        toast.error("Wrong");
      });
  }
  return (
    <section className="contact" id="contactMe">
      <Toaster position="top-center"/>
      

      
      <div className="contact--title">Contact Me</div>

      <div className="contact__form__section">
        <form ref={form} onSubmit={sendEmail} id="form" className="contact__form">
          <div className="contact__form__name__container">
            <label className="contact__form__name--label" htmlFor="name">
              Name:
            </label>
            <input
              name="name"
              id="name"
              className="contact__form__name--input"
              required
              type="text"
            />
          </div>

          <div className="contact__form__email__container">
            <label className="contact__form__email--label" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              name="email"
              className="contact__form__email--input"
              required
              type="text"
            />
          </div>

          <div className="contact__form__message__container">
            <label className="contact__form__message--label" htmlFor="message">
              Message:
            </label>
            <textarea
              placeholder=""
              required
              id="message"
              className="contact__form__message--input"
              name="message"
              cols="31"
              rows="10"
            ></textarea>
          </div>

          <button type="submit" className="contact--send">
            Enviar
          </button>
        </form>

        <div className="contact__info__section">
          <div className="contact__info__icon">
            <a
              href="https://github.com/dazuaje"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/david-azuaje/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="icon" />
            </a>

            <a
              href="mailto: davidazuaje1084@gmail.com?subject= Portfolio Subject"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="icon" />
            </a>
          </div>

          <div className="contact--text gmail">Portfolio</div>
          <div className="contact--text place">Buenos Aires, Argentina</div>

          <div className="copyright">&copy; All of the rights reserved</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
