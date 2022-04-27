import "./Modal.scss";
import message from "../../Assets/Images/message.png";

function Modal({ open, close }) {
  return (
    <>
      <div
        id="myModal"
        onClick={() => close}
        className={`popap ${open ? "open" : ""}`}
      >
        <div className="popap-content">
          <span onClick={close} className="close-modall">
            &times;
          </span>
          <p className="mt-4 fs-5">Your message was sent successfully</p>
          <img className="popap-img" src={message} alt="" />
        </div>
      </div>
    </>
  );
}

export default Modal;
