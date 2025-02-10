import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(verifyJWT);

router.route("/").get(getTodo);
router.route("/create").post(createTodo);
router.route("/:id").put(updateTodo);
router.route("/:id").delete(deleteTodo);

export default router;
