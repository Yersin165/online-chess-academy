import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you, " + name + "!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Contact Us</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;