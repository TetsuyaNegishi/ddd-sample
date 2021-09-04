import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../repository/UserRepository";
import { UserService } from "../../service/UserService";
import { GetUsersController } from "./GetUsersController";

const prisma = new PrismaClient();

const userRepository = new UserRepository(prisma.user);

const userService = new UserService(userRepository);

export const getUsersController = new GetUsersController(userService);
