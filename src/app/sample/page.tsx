"use client"

import { defaultApi } from "@/lib/api"
import {
  useQuery
} from "@tanstack/react-query"

const SamplePage = ({ }) => {
  const { data } = useQuery({ queryKey: ["pets"], queryFn: () => defaultApi.getUsers().then((response) => response.data) })

  return (
    <div>
      <h1>Response</h1>
      {data?.map((user) => <p key={user.id}>{user.lastName + user.firstName}</p>)}
    </div>
  )
}

export default SamplePage
