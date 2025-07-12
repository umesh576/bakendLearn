import { Router } from "express";
import {
  createUser,
  getUser,
  // getUserById,
  //   getUserById,
} from "../controller/user.controller";

const router = Router();

router.post("/add", createUser);
router.get("/get", getUser);
// router.get("/:id", getUserById);

export default router;
