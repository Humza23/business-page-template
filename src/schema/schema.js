import * as yup from "yup"

export default yup.object().shape({
    contactName: yup
      .string()
      .required("Name is required"),
    contactEmail: yup
      .string()
      .email("Must be a valid email address.")
      .required("Email is required"),
    contactSubject: yup
        .string()
        .required("Subject is Required")
        .min(5, "Subject must be at least 5 characters long"),
    contactMessage: yup
        .string()
        .required("Message is Required")
        .min(50, "Message must be at least 50 characters long"),
})