"use client"

import { cn } from "@/lib/utils"
import { Button } from "../atoms/button"
import { Users, Building } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SidebarProps = {
  className?: string
}

// TODO: Mapに変える
// eslint-disable-next-line max-lines-per-function, complexity
export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname()

  return (
    <aside className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            案件管理
          </h2>
          <div className="space-y-1">
            <Link href="/progresses">
              <Button variant="ghost" className={cn("w-full justify-start gap-2", pathname === "/progresses" && "bg-neutral-300")}>
                <Users size={20} />
                進捗管理
              </Button>
            </Link>
            <Link href="/applicants">
              <Button variant="ghost" className={cn("w-full justify-start gap-2", pathname === "/applicants" && "bg-neutral-300")}>
                <Users size={20} />
                候補者
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            マスタ
          </h2>
          <div className="space-y-1">
            <Link href="/sample">
              <Button variant="ghost" className={cn("w-full justify-start gap-2", pathname === "/sample" && "bg-neutral-300")}>
                <Building size={20} />
                取引先
              </Button>
            </Link>
            <Link href="/sample/form">
              <Button variant="ghost" className={cn("w-full justify-start gap-2", pathname === "/sample/form" && "bg-neutral-300")}>
                <Building size={20} />
                求人票
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}