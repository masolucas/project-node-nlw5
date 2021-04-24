import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração / Update
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

/**
 * Tipos de parametros
 * Routes Params = Parametros de rotas
 * Query Params = Filtros e buscas
 * Body Params = Objetos, em JSON, para inserçoes
 */

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };