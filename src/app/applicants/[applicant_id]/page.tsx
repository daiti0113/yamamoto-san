"use client"

import { AddAColumnModal } from "@/components/organisms/KanbanBoard/AddAColumnModal"
import { Column } from "@/components/organisms/KanbanBoard/Column"
import { Draggable } from "@/components/organisms/KanbanBoard/Draggable"
import { NewColumnButton } from "@/components/organisms/KanbanBoard/NewColumnButton"
import { useTaskGroups } from "@/components/organisms/KanbanBoard/useTaskGroups"
import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

// eslint-disable-next-line no-unused-vars
export const useShowModal = (): [boolean, (showModal: boolean) => void] => {
  const [showModal, setShowModal] = useState(false)

  const updateShowModal = (showModal: boolean) => {
    setShowModal(showModal)
  }

  return [showModal, updateShowModal]
}

// eslint-disable-next-line max-lines-per-function
export default function ApplicantDetailPage() {
  const [
    taskGroups,
    updateTaskGroups,
    swapTaskGroups,
    tasks,
    updateTasks,
    swapTasks,
    deleteTasks
  ] = useTaskGroups()

  const [showModal, updateShowModal] = useShowModal()

  let index = 0

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen">
        <div className="mt-8 h-full">
          <div className="m-4 h-full">
            <div className="flex h-full gap-4">
              {taskGroups.map((taskGroup, columnIndex) => {
                const groupedTasks = tasks.filter((task) => {
                  return task.groupName === taskGroup.groupName
                })
                const firstIndex = index
                index = index + groupedTasks.length
                return (
                  <li key={taskGroup.key} className="list-none">
                    <Draggable
                      item={taskGroup}
                      index={columnIndex}
                      swapItems={swapTaskGroups}
                    >
                      <Column
                        columnName={taskGroup.groupName}
                        firstIndex={firstIndex}
                        tasks={groupedTasks}
                        updateTasks={updateTasks}
                        deleteTasks={deleteTasks}
                        swapTasks={swapTasks}
                      ></Column>
                    </Draggable>
                  </li>
                )
              })}
              <NewColumnButton
                updateShowModal={updateShowModal}
              ></NewColumnButton>
              <AddAColumnModal
                showModal={showModal}
                updateShowModal={updateShowModal}
                updateNewColumnName={updateTaskGroups}
              ></AddAColumnModal>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  )
}
