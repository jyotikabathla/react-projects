import React, { useState } from 'react';
// Correct image import — use relative path from your project src folder, no absolute Windows path
import contactImage from './logo/people-working-call-center_23-2149288184.avif'; 
import styles from './Contact.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    issue: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit logic here
    console.log(formData);
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.formContainer}>
        <h2>Contact Us</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Issue:
            <textarea
              name="issue"
              placeholder="Describe your issue"
              value={formData.issue}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={styles.imageContainer}>
        <img src={contactImage} alt="Contact Us" />
      </div>
    </section>
  );
};

export default ContactUs;









