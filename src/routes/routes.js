import Router from 'express';
import UserController from "../app/controllers/UserController.js";

const ROUTER = Router();

ROUTER.post("/users", UserController.createUser)
ROUTER.get("/users", UserController.findAll)
ROUTER.get("/users/:id", UserController.findById)

export default ROUTER;