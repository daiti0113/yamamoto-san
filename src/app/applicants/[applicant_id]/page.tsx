"use client"

import { KanbanBoard } from "@/components/organisms/KanbanBoard/KanbanBoard"
import { useTaskGroups } from "@/components/organisms/KanbanBoard/useTaskGroups"

export default function ApplicantDetailPage() {
  const kanbanBoardProps = useTaskGroups()

  return (
    <KanbanBoard {...kanbanBoardProps} />
  )
}
