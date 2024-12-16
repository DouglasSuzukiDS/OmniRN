'use client'

import { View } from "react-native"
import { TasksArea } from "./TasksArea"
import { InputArea } from "./InputArea"
import { useEffect, useState } from "react"
import * as taskController from '../../controllers/taskController'
import { Task } from "../../types/task"

export const Container = () => {
   const [tasks, setTasks] = useState<Task[]>([])

   const taskList = async () => {
      const tasks = await taskController.getTasks()

      return tasks
   }

   useEffect(() => {
      taskList().then(tasks => setTasks(tasks))
   }, [])
   return (
      <View className="bg-black h-screen mb-4">
         <InputArea tasks={tasks} setTasks={setTasks} />

         <TasksArea tasks={tasks} setTasks={setTasks} />
      </View>
   )
}