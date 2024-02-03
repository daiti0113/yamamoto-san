import { DraggableItem } from "./item"
import { useState, useCallback } from "react"

// eslint-disable-next-line max-lines-per-function
export const useTasks = (): [
  DraggableItem[],
  // eslint-disable-next-line no-unused-vars
  (newTask: DraggableItem, index: number) => void,
  // eslint-disable-next-line no-unused-vars
  (dragIndex: number, hoverIndex: number, groupName: string) => void,
  // eslint-disable-next-line no-unused-vars
  (groupNames: string[]) => void,
  // eslint-disable-next-line no-unused-vars
  (target: DraggableItem) => void
] => {
  const [tasks, setTasks] = useState<DraggableItem[]>()

  const updateTasks = (newTask: DraggableItem, index: number) => {
    setTasks((current) => {
      const newTasks = [...(current ?? [])]
      newTasks.splice(index, 0, newTask)
      return newTasks
    })
  }

  const swapTasks = useCallback(
    (dragIndex: number, hoverIndex: number, groupName: string) => {
      setTasks((current) => {
        if (!current) return
        const item = current[dragIndex]
        if (!item) return
        const newItems = current?.filter((_, idx) => idx !== dragIndex)
        newItems?.splice(hoverIndex, 0, { ...item, groupName })
        return newItems
      })
    },
    [tasks, setTasks]
  )

  const deleteTasks = useCallback(
    (target: DraggableItem) => {
      setTasks((current) => {
        if (!current) return
        const items = current.filter((item) => {
          return item != target
        })
        return items
      })
    },
    [tasks, setTasks]
  )

  const alignTasks = (groupNames: string[]) => {
    setTasks((current) => {
      if (!current) return
      const newTasks: DraggableItem[] = []
      groupNames.map((groupName) => {
        const grouped = current.filter((task) => {
          return task.groupName == groupName
        })
        newTasks.push(...grouped)
      })
      return newTasks
    })
  }

  return [tasks ?? [], updateTasks, swapTasks, alignTasks, deleteTasks]
}