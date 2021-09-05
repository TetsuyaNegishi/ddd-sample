import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../repository/UserRepository";
import { UserService } from "../../service/UserService";
import { GetUsersController } from "./GetUsersController";
import { GetUsersCQRSController } from "./GetUsersCQRSController";

const prisma = new PrismaClient();

const userRepository = new UserRepository(prisma.user);

const userService = new UserService(userRepository);

export const getUsersController = new GetUsersController(userService);

export const getUsersCQRSController = new GetUsersCQRSController(userService);
