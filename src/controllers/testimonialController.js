import { Testimonials } from "../models/Testimonials.js";

const saveTestimonial = async (req, res) => {
  // Validate form

  const { name, email, message } = req.body;

  const errors = [];

  if (name.trim() === "") {
    errors.push({ message: "Name is empty" });
  }
  if (email.trim() === "") {
    errors.push({ message: "Email is empty" });
  }
  if (message.trim() === "") {
    errors.push({ message: "Message is empty" });
  }
  if (errors.length > 0) {
    // Show view with errors
    try {
      const testimonials = await Testimonials.findAll();
      res.render("testimonials", {
        namePage: "Testimonials",
        errors,
        name,
        email,
        message,
        testimonials,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      await Testimonials.create({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      res.redirect("/testimonials");
    } catch (err) {
      console.log(err);
    }
  }
};

export { saveTestimonial };
