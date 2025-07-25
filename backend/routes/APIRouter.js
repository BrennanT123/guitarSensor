import express from "express";
import * as ctrl from "../controllers/APIControllers.js";


const router = express.Router();

router.post("/postData", ctrl.postData);
router.get("/getData", ctrl.getData); 

export default router;