import { Router } from "express";
import * as todoController from '../controllers/todo'

export const mainRouter = Router()

mainRouter.get('/ping', todoController.ping)

mainRouter.get('/task', todoController.getTaskList)
mainRouter.post('/task', todoController.newTask)
mainRouter.put('/task/:id', todoController.editTask)
mainRouter.put('/task/toogle/:id', todoController.toogleCompletedTask)
mainRouter.delete('/task/:id', todoController.removeTask)