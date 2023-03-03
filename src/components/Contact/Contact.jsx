import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.scss";


function Contact({ myInfo, id, title }) {

  
  return (
    <section className="contact" >
      <p className="contact__content"  id={id}>{title}</p>
  
    
    <div className="contact__container">
      <div>
        <div className="contact__information">
           <FaPhoneAlt className="contact__icon"/>
           <div>
              <p className="contact__title">Llámame</p>
              <p className="contact__subtitle">{myInfo.phone}</p>
            </div>
        </div>
      </div>

      <div>
        <div className="contact__information">
          <FaEnvelope className="contact__icon"/>
           <div>
              <p className="contact__title">Email</p>
              <p className="contact__subtitle">{myInfo.email}</p>
            </div>
        </div>
      </div>

      <div>
        <div className="contact__information">
          <FaMapMarkerAlt className="contact__icon"/>
           <div>
              <p className="contact__title">Localización</p>
              <p className="contact__subtitle">{myInfo.city}</p>
            </div>
        </div>
      </div>

      </div>
    </section>

  );
};

export default Contact;
