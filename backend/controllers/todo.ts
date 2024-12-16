import { RequestHandler } from "express";
import { taskSchema } from "../schemas/task";
import { createTask, deleteTask, getTaskById, getTasks, toogleTask, updateTask } from "../services/todo";

export const ping: RequestHandler = (req, res) => {
   res.status(200).json({ pong: true })
}

export const getTaskList: RequestHandler = async (req, res) => {
   try {
      const tasks = await getTasks()

      if (!tasks) res.status(400).json({ msg: 'Erro ao listar tarefas.' })

      res.status(200).json({ msg: 'Tarefas encontradas', tasks: tasks })

   } catch (err) {
      console.error(err)

      res.status(500).json({ msg: 'Erro ao tentar carregar tarefas.' })
      return
   }
}

export const newTask: RequestHandler = async (req, res) => {
   const safeData = taskSchema.safeParse(req.body)

   if (!safeData.success) {
      res.status(404).json({ msg: 'Erro ao tentar registrar tarefa.' })
      return
   }

   try {
      const task = await createTask(safeData.data)

      if (!task) res.status(400).json({ msg: 'Erro ao tentar registrar tarefa.' })

      res.status(201).json({ msg: 'Tarefa criada', task })
   } catch (err) {
      console.error(err)

      res.status(500).json({ msg: 'Erro ao tentar registrar tarefa.' })
      return
   }
}

export const editTask: RequestHandler = async (req, res) => {
   const safeData = taskSchema.safeParse(req.body)

   if (!safeData.success) {
      res.status(404).json({ msg: 'Erro ao tentar editar tarefa.' })
      return
   }

   try {
      const { id } = req.params

      const task = await updateTask(parseInt(id), safeData.data)

      if (!task) res.status(400).json({ msg: 'Erro ao tentar editar tarefa.' })

      res.status(200).json({ msg: 'Tarefa editada.', task })
   } catch (err) {
      console.error(err)

      res.status(500).json({ msg: 'Erro ao tentar editar tarefa.' })
      return
   }
}

export const toogleCompletedTask: RequestHandler = async (req, res) => {
   try {
      const { id } = req.params

      const findTask = await getTaskById(parseInt(id))

      if (!findTask) {
         res.status(404).json({ msg: 'Tarefa não encontrada.' })
         return
      }

      const task = await toogleTask(parseInt(id), !findTask.completed)

      res.status(200).json({ msg: 'Status da tarefa modificada.', task })
   } catch (err) {
      console.error(err)
      res.status(500).json({ msg: 'Erro ao tentar alterar status da tarefa.' })
   }
}

export const removeTask: RequestHandler = async (req, res) => {
   try {
      const { id } = req.params

      const task = await deleteTask(parseInt(id))

      if (!task) res.status(400).json({ msg: 'Erro ao tentar remover tarefa.' })

      res.status(200).json({ msg: 'Tarefa deletada.' })
   } catch (err) {
      console.error(err)

      res.status(500).json({ msg: 'Erro ao tentar remover tarefa.' })
   }
}