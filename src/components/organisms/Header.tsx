

import { Divider } from "../atoms/Divider"
import { UserMenu } from "./UserMenu"

export const Header = () => {
  return (
    <header className="flex p-4 items-stretch border-b-2">
      <div className="self-center">サービス名</div>
      <Divider direction="vertical" className="mx-4 border-r-2" />
      <div className="flex-1 flex items-center">
        <p>株式会社ほげほげ</p>
        <div className="ml-auto">
          <UserMenu userName="高橋 拓巳" />
        </div>
      </div>
    </header>
  )
}
