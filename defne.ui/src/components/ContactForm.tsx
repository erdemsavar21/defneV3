'use client'
import React, { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const message = `<!DOCTYPE html><html><head><title> Kontakt </title></head><body><h1> Kontakt Information </h1><p>Vorname: ${formData.firstname} </p><p>Lastname: ${formData.lastname} </p><p>Email: <a href = '${formData.email}'> ${formData.email} </a></p><p>Telefonnummer: ${formData.phone} </p><p> Message:${formData.message}</p></body></html>`;
      const res = await fetch('http://localhost:3000/api/tools/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: "follow",
        body: JSON.stringify({
          subject: "Kontakt Formular",
          message: message,
          fromEmail: "info@defnerestaurant.com",
          toEmail: "info@defnerestaurant.com"
        }),
      });

      const result = await res.json();
      if (!result.success) setIsSent(false);
      setIsSent(true);
    } catch (error) {
      console.error(error);
      setIsSent(false);
    }
  };

  return (
    <div className="row">
      <div className="maps">
        <div id="map-canvas-ssss">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5030.149416476672!2d7.000187!3d50.922335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf268419667b25%3A0xd223f8b5d8a148b2!2sRolshover%20Str.%20229%2F231%2C%2051105%20K%C3%B6ln!5e0!3m2!1str!2sde!4v1734424062994!5m2!1str!2sde" 
          width="100%"
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </div>

      <div className="contact-content">
        <h3 className="title contact-title">Melden Sie sich gerne bei uns</h3>
        <p className="contact-desc">
          Sie können uns natürlich auch direkt anrufen unter <br />
          +49 (0) 179 - 760 8332
        </p>
        {isSent ? (
          <p className="success-message">Ihre Nachricht wurde erfolgreich gesendet!</p>
        ) : (
          <form id="contactform" className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-3">
                <p className="contact-form-author">
                  <input
                    type="text"
                    required
                    size={30}
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    placeholder="Vorname"
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="col-sm-3">
                <p className="contact-form-author">
                  <input
                    type="text"
                    required
                    size={30}
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    placeholder="Nachname"
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="col-sm-3">
                <p className="contact-form-email">
                  <input
                    type="email"
                    required
                    size={30}
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="Email-Adresse"
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="col-sm-3">
                <p className="contact-form-subject">
                  <input
                    type="text"
                    required
                    size={30}
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    placeholder="Telefonnummer"
                    onChange={handleChange}
                  />
                </p>
              </div>
            </div>
            <p className="contact-form-message">
              <textarea
                required
                rows={3}
                cols={145}
                name="message"
                id="message"
                value={formData.message}
                placeholder="Ihre Nachricht an uns"
                onChange={handleChange}
              />
            </p>
            <p className="form-submit button">
              <button
                className="hvr-rectangle-out"
                type="submit"
                id="submit"
                name="submit"
              >
                Senden
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}