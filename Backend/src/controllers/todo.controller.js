import { Todo } from "../models/todo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ userId: req.user._id });

  console.log(todos);
  res.status(201).json(new ApiResponse(201, { todos }, "get Todo"));
});

const createTodo = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    throw new ApiError(400, "missing required fields");
  }

  const newTodo = new Todo({ userId: req.user._id, title });
  await newTodo.save();
  console.log(newTodo);

  return res
    .status(201)
    .json(new ApiResponse(201, { newTodo }, "New Todo Added"));
});

const updateTodo = asyncHandler(async (req, res) => {
  const { title, completed } = req.body;

  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title, completed },
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
