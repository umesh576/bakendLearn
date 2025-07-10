import { Router } from "express";
import { createUser } from "../controller/user.controller";

const router = Router();

router.post("/add", createUser);

export default router;
