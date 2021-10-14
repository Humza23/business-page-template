import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import schema from '../schema/schema'
import * as yup from 'yup';


const initialFormValues = {
  contactName: "",
  contactEmail: "",
  contactSubject: "",
  contactMessage: "",
}
const Footer = () => {

  const [formValues, setFormValues] = useState(initialFormValues);

  const [errors, setErrors] = useState({
    contactName: "Name is required" ,
    contactEmail: "Email is required",
    contactSubject: "Subject is required",
    contactMessage: "Message is required",
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_tit21f9",
      "template_to3qq5b",
      e.target,
      "user_Mjm9Zv6iu3lV7LWKsxHV4"
      )
      .then(
        (result) => {
          console.log("submitted");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
        );
        e.target.reset();
        swal({
          title: "Message Sent!",
          text: "We look forward to speaking with you!",
          icon: "success",
          button: "Done!",
        });
        setFormValues(initialFormValues)
  };
      
  const handleChange = (e) => {
    const { name, value } = e.target
        
        yup
        .reach(schema, name)
        .validate(value)
        .then(valid => {
          setErrors({
            ...errors, [name]: ""
          });
          setButtonDisabled(false)
        })
        .catch(err => {
          setErrors({
            ...errors, [name]: err.errors[0]
          });
        });
        setFormValues({ ...formValues, [name]: value });
  };
      
      useEffect(() => {
        schema.isValid(formValues).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formValues])

      return (
        <footer id="footer">
      <main>
        <address>
            My New Business<br/><br/>
            1234 My House St.<br/>
            Brooklyn, NY 12345<br/><br/>
            e. <a href="mailto:webmaster@somedomain.com">business@email.com</a><br/>
            p. <a href="tel:+13301231234">718.123.1234</a>
        </address>
        <form onSubmit={sendEmail} name="contactForm">
            <label htmlFor="contactName">
              {errors.contactName ? 
              <div>
              Name - <span className="requiredErr">{errors.contactName}*</span>
              </div>
              :
              <div>
              Name <span className="required"></span> 
              </div>
              }
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              onChange={handleChange}
              value={formValues.contactName}
            />
            <label htmlFor="contactEmail">
            {errors.contactEmail ? 
              <div>
              Email - <span className="requiredErr">{errors.contactEmail}*</span>
              </div>
              :
              <div>
              Email <span className="required"></span> 
              </div>
              }
            </label>
            <input
              type="text"
              id="contactEmail"
              name="contactEmail"
              onChange={handleChange}
              value={formValues.contactEmail}
            />
            <label htmlFor="contactSubject">
            {errors.contactSubject ? 
              <div>
              Subject - <span className="requiredErr">{errors.contactSubject}*</span>
              </div>
              :
              <div>
              Subject <span className="required"></span> 
              </div>
              }
            </label>
            <input
              type="text"
              id="contactSubject"
              name="contactSubject"
              onChange={handleChange}
              value={formValues.contactSubject}
            />
            <label htmlFor="contactMessage">
            {errors.contactMessage ? 
              <div>
              Message - <span className="requiredErr">{errors.contactMessage}*</span>
              </div>
              :
              <div>
              Message <span className="required"></span> 
              </div>
              }
            </label>
            <textarea
              cols="50"
              rows="5"
              id="contactMessage"
              name="contactMessage"
              onChange={handleChange}
              value={formValues.contactMessage}
            ></textarea>
            <button className="submit" disabled={buttonDisabled}>
              Submit
            </button>
        </form>
    </main>
    </footer>
  );
};

export default Footer;
