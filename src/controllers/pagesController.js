import { Travels } from "../models/Travel.js";
import { Testimonials } from "../models/Testimonials.js";

const pageBeginning = async (req, res) => {
  const promiseDB = [];
  promiseDB.push(Travels.findAll({ limit: 3 }));
  promiseDB.push(Testimonials.findAll());
  try {
    const result = await Promise.all(promiseDB);
    res.render("start", {
      namePage: "START",
      clase: "home",
      travels: result[0],
      testimonials: result[1],
    });
  } catch (err) {
    console.log(err);
  }
};

const pageAbout = (req, res) => {
  res.render("about", {
    namePage: "About us",
  });
};

const pageTravels = async (req, res) => {
  const travels = await Travels.findAll({
    atributes: ["titulo", "precio"],
  });
  res.render("travels", {
    namePage: "Travels",
    travels,
  });
};

const pageOneTravel = async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await Travels.findOne({ where: { slug: slug } });
    res.render("onetravel", {
      namePage: result.titulo,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

const pageTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonials.findAll();
    res.render("testimonials", {
      namePage: "Testimonials",
      testimonials,
    });
  } catch (err) {
    console.log(err);
  }
};

const page404 = (req, res) => {
  res.status(404).render("404");
};

export {
  pageBeginning,
  pageAbout,
  pageTravels,
  pageOneTravel,
  pageTestimonials,
  page404,
};
