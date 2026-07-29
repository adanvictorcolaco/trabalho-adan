import { Router } from "express";
import { criarPlanoDeEstudo } from "../controllers/studyPlanController.js";

const router = Router();

router.post("/", criarPlanoDeEstudo);

export default router;
