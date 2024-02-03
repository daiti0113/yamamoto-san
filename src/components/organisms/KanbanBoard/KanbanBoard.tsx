import { DndProvider } from "react-dnd"
import { DraggableItem } from "./item"
import { HTML5Backend } from "react-dnd-html5-backend"
import { useEffect, useState } from "react"
import { Draggable } from "./Draggable"
import { Column } from "./Column"
import { NewColumnButton } from "./NewColumnButton"
import { AddAColumnModal } from "./AddAColumnModal"

type KanbanBoardProps = {
  taskGroups: DraggableItem[]
  // eslint-disable-next-line no-unused-vars
  updateTaskGroups: (name: string) => void
  // eslint-disable-next-line no-unused-vars
  swapTaskGroups: (indexI: number, indexJ: number) => void
  tasks: DraggableItem[]
  // eslint-disable-next-line no-unused-vars
  updateTasks: (newTask: DraggableItem, index: number) => void
  // eslint-disable-next-line no-unused-vars
  swapTasks: (dragIndex: number, hoverIndex: number, groupName: string) => void
  // eslint-disable-next-line no-unused-vars
  deleteTasks: (target: DraggableItem) => void
  defaultTaskGroups?: DraggableItem[]
  // eslint-disable-next-line no-unused-vars
  setTaskGroups: (taskGroups?: DraggableItem[]) => void
}

// TODO: useDialog に変更
// eslint-disable-next-line no-unused-vars
export const useShowModal = (): [boolean, (showModal: boolean) => void] => {
  const [showModal, setShowModal] = useState(false)

  const updateShowModal = (showModal: boolean) => {
    setShowModal(showModal)
  }

  return [showModal, updateShowModal]
}

// eslint-disable-next-line max-lines-per-function
export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  taskGroups,
  updateTaskGroups,
  swapTaskGroups,
  tasks,
  updateTasks,
  swapTasks,
  deleteTasks,
  defaultTaskGroups,
  setTaskGroups
}) => {

  // TODO: もっといい初期値の渡し方があるはず。要検討。
  useEffect(() => {
    setTaskGroups(defaultTaskGroups)
  }, [])

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
              />
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
