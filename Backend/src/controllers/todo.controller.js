import { Todo } from "../models/todo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getTodo = asyncHandler(async (req, res) => {
  console.log(req);

  const todos = await Todo.find({ userId: req.user.id });

  res.status(201).json(new ApiResponse(201, { todos }, "get Todo"));
});

const createTodo = asyncHandler(async (req, res) => {
  const { title, userId } = req.body;

  if (!title && !userId) {
    throw new ApiError(400, "missing required fields");
  }

  const newTodo = new Todo({ userId, title });
  await newTodo.save();

  return res
    .status(201)
    .json(new ApiResponse(201, { newTodo }, "New Todo Added"));
});

const updateTodo = asyncHandler(async (req, res) => {
  const { completed } = req.body;

  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { completed },
    { new: true }
  );

  return res
    .status(201)
    .json(new ApiResponse(201, { todo }, "Todo is updated"));
});

const deleteTodo = asyncHandler(async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.status(201).json(new ApiResponse(201, {}, "Todo Deleted"));
});

export { createTodo, updateTodo, getTodo, deleteTodo };
