import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Currently I’m open to new opportunities. <br />
        Please feel free to contact me through any of the following methods.
      </p>
      <div className="contactMethods">
        <a
          href="https://www.linkedin.com/in/yanc3093/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a href="mailto:yanc3093@gmail.com">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
        <a
          href="https://wa.me/6580404797"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
