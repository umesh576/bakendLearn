import { Router } from "express";
import { createUser, getUser } from "../controller/user.controller";

const router = Router();

router.post("/add", createUser);
router.get("/get", getUser);

export default router;
