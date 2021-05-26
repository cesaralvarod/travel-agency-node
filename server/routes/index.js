import express from "express";
import {
  pageAbout,
  pageBeginning,
  pageTravels,
  pageOneTravel,
  pageTestimonials,
  page404,
} from "../controllers/pagesController.js";
import { saveTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// get

router.get("/", pageBeginning);

router.get("/about", pageAbout);

router.get("/travels", pageTravels);

router.get("/travels/:slug", pageOneTravel);

router.get("/testimonials", pageTestimonials);

router.get("*", page404);

// post

router.post("/testimonials", saveTestimonial);

export default router;
