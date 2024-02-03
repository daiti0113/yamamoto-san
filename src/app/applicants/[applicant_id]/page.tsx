"use client"

import { KanbanBoard } from "@/components/organisms/KanbanBoard/KanbanBoard"
import { useTaskGroups } from "@/components/organisms/KanbanBoard/useTaskGroups"

export default function ApplicantDetailPage() {
  const kanbanBoardProps = useTaskGroups()

  return (
    <KanbanBoard {...kanbanBoardProps} defaultTaskGroups={[{
      key: "test1",
      groupName: "未公開",
      contents: "未公開",
      type: "column"
    },
    {
      key: "test2",
      groupName: "提案中",
      contents: "提案中",
      type: "column"
    }]} />
  )
}
