import Router from 'express';
import UserController from "../app/controllers/UserController.js";

const ROUTER = Router();

ROUTER.post("/users", UserController.createUser)
ROUTER.get("/users", UserController.findAll)
ROUTER.get("/users/:id", UserController.findById)
ROUTER.get("/users", UserController.findWithQuery)
ROUTER.put("/users/:id", UserController.findByIdAndUpdate)

export default ROUTER;