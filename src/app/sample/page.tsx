"use client"

import {
  useQuery
} from "@tanstack/react-query"

type GetPetResponse = Array<{
  id: number
  name: string
  tag: string
}>

const getPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pets`)
  const data = res.json()
  return data
}

const SamplePage = ({ }) => {
  const query = useQuery<GetPetResponse>({ queryKey: ["pets"], queryFn: getPets })

  console.log(query.data)

  return (
    <div>
      <h1>Response</h1>
      {query.data?.map((pet) => <p key={pet.id}>{pet.name}</p>)}
    </div>
  )
}

export default SamplePage
