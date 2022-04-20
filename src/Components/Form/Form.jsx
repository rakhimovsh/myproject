import "./Form.scss";

function Form() {
  return (
    <section className="container pt-4 d-flex flex-column align-items-center">
      <h2 id="contact">Contact me</h2>
      <form className="contact__form">
        <p className="contact_field_half">
          <label for="contact__name" className="contact_form_label">
            Name
          </label>
          <input
            className="contact__form__input"
            type="text"
            name="name"
            placeholder="Your name"
          />
        </p>

        <p className="contact_field_half">
          <label for="contact__email" className="contact_form_label">
            Email
          </label>
          <input
            className="contact__form__input"
            type="text"
            name="email"
            placeholder="Email"
          />
        </p>

        <p>
          {" "}
          <label for="contact__message" className="contact_form_label">
            Message
          </label>
          <textarea placeholder="Message" type="text" name="message"></textarea>
        </p>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
}

export default Form;
