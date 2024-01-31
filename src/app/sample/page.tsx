"use client"

import { defaultApi } from "@/lib/api"
import {
  useQuery
} from "@tanstack/react-query"

const SamplePage = ({ }) => {
  const { data } = useQuery({ queryKey: ["pets"], queryFn: () => defaultApi.findPets().then((response) => response.data) })

  return (
    <div>
      <h1>Response</h1>
      {data?.map((pet) => <p key={pet.id}>{pet.name}</p>)}
    </div>
  )
}

export default SamplePage
