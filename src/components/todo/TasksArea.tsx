import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { FlatList, SafeAreaView, Text, View } from "react-native"
import { TaskItem } from "./TaskItem"
import { Task } from "../../types/task"

type Props = {
   tasks: Task[]
   setTasks: Dispatch<SetStateAction<Task[]>>
}
export const TasksArea = ({ tasks, setTasks }: Props) => {

   return (
      <SafeAreaView className="px-8">
         <FlatList
            data={tasks}
            renderItem={task =>
               <TaskItem task={task.item}
                  tasks={tasks} setTasks={setTasks} />}
            keyExtractor={task => task.id.toString()}
         />
      </SafeAreaView>
   )
}