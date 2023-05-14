import express from "express";
import {
  registerController,
  loginController,
  testController,
  updateProfileController,
  getAllUserDetailsController,
  forgotPasswordController,
  contactQueryRegisterController,
  getAllQueryDetailsController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

//routing
// REGISTER || Method POST
router.post("/register", registerController);

// REGISTER || Method POST
router.post("/contact-register", contactQueryRegisterController);

// LOGIN || Methos POST
router.post("/login", loginController); // ab controller banate hai

//forgot password || Post
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected Staff route auth
router.get("/staff-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Customer route auth
router.get("/customer-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected frenchise route auth
router.get("/frenchise-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//get all user details
router.get("/get-users", requireSignIn, isAdmin, getAllUserDetailsController);

//get all user query details
router.get("/get-query", requireSignIn, isAdmin, getAllQueryDetailsController);

export default router;
