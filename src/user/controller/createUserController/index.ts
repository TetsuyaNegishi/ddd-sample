import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../repository/UserRepository";
import { UserService } from "../../service/UserService";
import { CreateUsersController } from "./CreateUserController";

const prisma = new PrismaClient();

const userRepository = new UserRepository(prisma.user);

const userService = new UserService(userRepository);

export const createUserController = new CreateUsersController(userService);
