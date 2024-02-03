"use client"

import { ScrollArea, ScrollBar } from "@/components/molecules/ScrollArea"
import { KanbanBoard } from "@/components/organisms/KanbanBoard/KanbanBoard"
import { DraggableItem } from "@/components/organisms/KanbanBoard/item"
import { useTaskGroups } from "@/components/organisms/KanbanBoard/useTaskGroups"
import { defaultApi } from "@/lib/api"
import { calcAge } from "@/lib/date"
import { useQuery } from "@tanstack/react-query"

export default function ApplicantDetailPage({ params: { applicant_id } }: { params: { applicant_id: string } }) {
  const { data, isLoading } = useQuery({ queryKey: [`fetchApplicant_${applicant_id}`], queryFn: () => defaultApi.getUsersUserId(Number(applicant_id)).then((response) => response.data) })

  const kanbanBoardProps = useTaskGroups()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>{data?.firstName} {data?.lastName}（{data?.dateOfBirth ? calcAge(data?.dateOfBirth) : ""}歳）</h1>
      <ScrollArea>
        <KanbanBoard {...kanbanBoardProps} defaultTaskGroups={defaultTaskGroups} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
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
