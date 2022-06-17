import { Request, Response, Router } from "express";
import { createUserController } from "../useCases";

const route = Router();

route.post("/users", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { route };
