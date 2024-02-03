"use client"

import { ScrollArea, ScrollBar } from "@/components/molecules/ScrollArea"
import { KanbanBoard } from "@/components/organisms/KanbanBoard/KanbanBoard"
import { DraggableItem } from "@/components/organisms/KanbanBoard/item"
import { useTaskGroups } from "@/components/organisms/KanbanBoard/useTaskGroups"

export default function ApplicantDetailPage() {
  const kanbanBoardProps = useTaskGroups()

  return (
    <ScrollArea>
      <KanbanBoard {...kanbanBoardProps} defaultTaskGroups={defaultTaskGroups} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

// TODO: groupNameとcontentsはおそらくどっちかで良いはず。型を修正すること。
const defaultTaskGroups: DraggableItem[] = [
  {
    key: "1",
    groupName: "未公開",
    contents: "未公開",
    type: "column"
  },
  {
    key: "2",
    groupName: "提案中",
    contents: "提案中",
    type: "column"
  },
  {
    key: "3",
    groupName: "選考中",
    contents: "選考中",
    type: "column"
  },
  {
    key: "4",
    groupName: "内定・入社",
    contents: "内定・入社",
    type: "column"
  },
  {
    key: "5",
    groupName: "辞退・不採用",
    contents: "辞退・不採用",
    type: "column"
  }
]
