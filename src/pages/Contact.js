import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="page-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a question about a course or need help? We'd love to hear from you.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Almaty, Kazakhstan</p>
            </div>
          </div>
          <div className="contact-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>hello@chessacademy.kz</p>
            </div>
          </div>
          <div className="contact-item">
            <span>🕐</span>
            <div>
              <strong>Support Hours</strong>
              <p>Mon–Fri, 9am–6pm (AST)</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <span>✅</span>
              <h3>Message sent!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Your message..." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="auth-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;