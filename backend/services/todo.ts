import { Prisma, Task } from "@prisma/client";
import { prisma } from "../utils/prisma";

export const getTasks = async () => {
   const tasks = await prisma.task.findMany()

   return tasks
}

export const getTaskById = async (id: number) => {
   const task = await prisma.task.findUnique({ where: { id } })

   return task
}

export const createTask = async (task: Prisma.TaskCreateInput) => {
   const newTask = await prisma.task.create({ data: task });

   return newTask
}

export const updateTask = async (id: number, task: Prisma.TaskCreateInput) => {
   const findTask = await prisma.task.findFirst({ where: { id } })

   if (!findTask) throw new Error(`Tarefa de ID: ${id} não localizada`)

   const updatedTask = await prisma.task.update({
      where: { id },
      data: task,
   });

   return updatedTask
}

export const toogleTask = async (id: number, completed: boolean) => {
   const findTask = await prisma.task.findFirst({ where: { id } })

   if (!findTask) throw new Error(`Tarefa de ID: ${id} não localizada`)

   const updatedTask = await prisma.task.update({
      where: { id },
      data: { completed: completed },
   });

   return updatedTask
}

export const deleteTask = async (id: number) => {
   const task = await prisma.task.findFirst({ where: { id } })

   if (!task) throw new Error(`Tarefa de ID: ${id} não localizada`)

   const deletedTask = await prisma.task.delete({
      where: { id },
   });

   return deletedTask
}