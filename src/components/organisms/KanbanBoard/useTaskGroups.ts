import { useCallback, useState } from "react"
import { ItemTypes } from "./itemTypes"
import { DraggableItem } from "./item"
import { v4 as uuidv4 } from "uuid"
import { useTasks } from "./useTasks"

// eslint-disable-next-line max-lines-per-function
export const useTaskGroups = (): {
  taskGroups: DraggableItem[],
  // eslint-disable-next-line no-unused-vars
  updateTaskGroups: (name: string) => void,
  // eslint-disable-next-line no-unused-vars
  swapTaskGroups: (indexI: number, indexJ: number) => void,
  tasks: DraggableItem[],
  // eslint-disable-next-line no-unused-vars
  updateTasks: (newTask: DraggableItem, index: number) => void,
  // eslint-disable-next-line no-unused-vars
  swapTasks: (dragIndex: number, hoverIndex: number, groupName: string) => void,
  // eslint-disable-next-line no-unused-vars
  deleteTasks: (target: DraggableItem) => void
} => {
  const [taskGroups, setTaskGroups] = useState<DraggableItem[]>()
  const [tasks, updateTasks, swapTasks, alignTasks, deleteTasks] = useTasks()

  const updateTaskGroups = useCallback(
    (name: string) => {
      setTaskGroups((current) => {
        const newTaskGroup = {
          key: uuidv4(),
          groupName: name,
          contents: "",
          type: ItemTypes.column
        }
        return [...(current ?? []), newTaskGroup]
      })
    },
    [taskGroups, setTaskGroups]
  )

  const swapTaskGroups = useCallback(
    (indexI: number, indexJ: number) => {
      setTaskGroups((current) => {
        if (!current) return
        const newTaskGroups = current.filter((_, index) => index !== indexI)
        newTaskGroups.splice(indexJ, 0, { ...current[indexI] })
        alignTasks(
          newTaskGroups.map((taskGroup) => {
            return taskGroup.groupName
          })
        )
        return [...newTaskGroups]
      })
    },
    [alignTasks]
  )

  return {
    taskGroups: taskGroups ?? [],
    updateTaskGroups,
    swapTaskGroups,
    tasks: tasks ?? [],
    updateTasks,
    swapTasks,
    deleteTasks
  }
}