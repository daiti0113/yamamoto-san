import { Button } from "@/components/atoms/button"
import Link from "next/link"

// eslint-disable-next-line max-lines-per-function
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/sample">
        <Button>Login</Button>
      </Link>
    </main>
  )
}
