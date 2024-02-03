import { Plus } from "lucide-react"

type NewColumnButtonProps = {
  // eslint-disable-next-line no-unused-vars
  updateShowModal: (showModal: boolean) => void;
};

export const NewColumnButton: React.FC<NewColumnButtonProps> = ({
  updateShowModal
}) => {
  return (
    <button
      className="h-[103px] w-[335px] border border-dashed hover:underline"
      onClick={() => {
        updateShowModal(true)
      }}
    >
      <div className="flex items-center justify-center">
        <Plus className="h-4 w-4"></Plus>
        <span className="ml-2">Add column</span>
      </div>
    </button>
  )
}
