

import { Router } from "express";
import {
  createUser,
  getUser,
 
  deleteUser,
} from "../controllers/User";

const router = Router();

router.post("/", createUser);

router.get("/:id", getUser);

//router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;