import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setSubmitStatus("Please fill in all fields before sending your message.");
      return;
    }

    const emailTo = "atishreyvarshney@gmail.com";
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSubmitStatus(`An email draft has been opened to notify you at ${emailTo}.`);
    console.log("Contact form message prepared:", { name, email, subject, message });
    form.reset();
  };

  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>
        <div className="line"></div>
      </motion.div>

      <div className="contact-container">

        {/* Left Side */}

        <motion.div
          className="contact-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>Let's Work Together 🚀</h3>

          <p>
            I'm always interested in exciting projects,
            internships and freelance opportunities.
            Feel free to contact me anytime.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Phone</h4>
                <span>+91 6395804360</span>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <span>atishreyvarshney@gmail.com</span>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <span>Gurugram, India</span>
              </div>
            </div>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/AtishreyVarshney0005"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/atishreyvarshney"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.form
          className="contact-form"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

          {submitStatus && (
            <p className="submit-status">{submitStatus}</p>
          )}

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;