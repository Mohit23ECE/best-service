import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createServiceController, deleteServiceController, serviceController, singleServiceController, updateServiceController } from "../controllers/serviceController.js";

const router = express.Router()

// routes
//create category
router.post('/create-service', requireSignIn, isAdmin, createServiceController);

//update category
router.put('/update-service/:id', requireSignIn, isAdmin, updateServiceController);

//all category
router.get('/get-service', serviceController);

//single category
router.get('/single-service/:slug', singleServiceController);

//delete category
router.delete('/delete-service/:id', requireSignIn, isAdmin, deleteServiceController);

export default router