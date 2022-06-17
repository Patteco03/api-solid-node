import { MailtrapMailProvider } from "../providers/email/implementations/MailtrapMailProvider";
import { PostgressUserRespository } from "../repositories/implementations/PostgressUserRepository";
import { CreateUserUseCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const postgresUsersRepository = new PostgressUserRespository();
const mailTrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
