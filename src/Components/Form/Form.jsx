import axios from "axios";
import Modal from "../Modal/Modal";
import "./Form.scss";
import React from "react";

function Form() {
  const token = "5349189133:AAFVvDAyH-H8o5owCtas9bk13NFLOqNF9jM";
  const chatId = "-772141632";
  const uriAPI = `https://api.telegram.org/bot${token}/sendMessage`;
  const [modal, setModal] = React.useState(false);
  const closeModal = () => {
    setModal(false);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.target.elements;

    let message = `<b> Foydalanuvchidan kelgan ma'lumot</b>\n`;
    message += `<b> Ismi: </b> ${formElements.user_name.value.trim()}\n`;
    message += `<b> Email: </b> ${formElements.user_email.value.trim()}\n`;
    message += `<b> Tel: </b> ${formElements.user_tel.value.trim()}\n`;
    message += `<b> Habar: </b> ${formElements.user_message.value.trim()}`;

    axios
      .post(uriAPI, {
        chat_id: chatId,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        formElements.user_name.value = null;
        formElements.user_email.value = null;
        formElements.user_tel.value = null;
        formElements.user_message.value = null;
        setModal(true);
      });
  }
  return (
    <>
      <section className="container pt-4 d-flex flex-column align-items-center">
        <h2 id="contact">Contact me</h2>
        <form onSubmit={handleSubmit} className="contact__form">
          <p className="contact_field_half">
            <label htmlFor="contact__name" className="contact_form_label">
              Name
            </label>
            <input
              className="contact__form__input"
              type="text"
              name="user_name"
              placeholder="Your name"
              autoComplete="off"
            />
          </p>

          <p className="contact_field_half">
            <label htmlFor="contact__email" className="contact_form_label">
              Email
            </label>
            <input
              className="contact__form__input"
              type="email"
              name="user_email"
              placeholder="Email"
              autoComplete="off"
            />
          </p>
          <p className="contact_field_half">
            <label htmlFor="contact__email" className="contact_form_label">
              Email
            </label>
            <input
              className="contact__form__input"
              type="tel"
              name="user_tel"
              placeholder="Phone number"
              autoComplete="off"
            />
          </p>

          <p>
            {" "}
            <label htmlFor="contact__message" className="contact_form_label">
              Message
            </label>
            <textarea
              placeholder="Message"
              type="text"
              name="user_message"
            ></textarea>
          </p>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </section>
      <Modal open={modal} close={closeModal} />
    </>
  );
}

export default Form;
