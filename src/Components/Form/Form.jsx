import "./Form.scss";
import telegram from "./telegram.php";

function Form() {
  return (
    <section className="container pt-4 d-flex flex-column align-items-center">
      <h2 id="contact">Contact me</h2>
      <form action={telegram} method="POST" className="contact__form">
        <p className="contact_field_half">
          <label htmlFor="contact__name" className="contact_form_label">
            Name
          </label>
          <input
            className="contact__form__input"
            type="text"
            name="user_name"
            placeholder="Your name"
          />
        </p>

        <p className="contact_field_half">
          <label htmlFor="contact__email" className="contact_form_label">
            Email
          </label>
          <input
            className="contact__form__input"
            type="text"
            name="user_email"
            placeholder="Email"
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
  );
}

export default Form;
