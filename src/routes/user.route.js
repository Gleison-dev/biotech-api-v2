import { Router } from "express";
import { 
    createUser,
    getAllUsers,
    getUserById,
    getUserByName
 } from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.post("/new-user", async (req, res) => {
    const { name, cpf, email, password } = req.body;
    const newUser = await createUser(name, cpf, email, password);
    res
    .status(201)
    .json({
        message: "Usuário criado com sucesso!",
        newUser
    });
});

userRoute.get("/users", async (req, res) => {
    const users = await getAllUsers();
    res
    .json({users});
});

userRoute.get("/user-find-id/:id", async (req, res) => {
    const id = req.params.id;
    const userFindId = await getUserById(id);
    res
    .json({userFindId});
});

userRoute.get("/user-find-name", async (req, res) => {
    const { name } = req.body;
    const userFindName = await getUserByName(name);
    res
    .json({userFindName});
});

export { userRoute }