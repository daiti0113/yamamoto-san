import React, { useState } from "react"
import { DraggableItem } from "./item"
import { ItemTypes } from "./itemTypes"
import { v4 as uuidv4 } from "uuid"

type AddTaskProps = {
  displayNone: () => void;
  // eslint-disable-next-line no-unused-vars
  updateTasks: (arg: DraggableItem, index: number) => void;
  groupName: string;
  index: number;
};

// eslint-disable-next-line max-lines-per-function
export const AddTask: React.FC<AddTaskProps> = ({
  displayNone,
  updateTasks,
  groupName,
  index
}) => {
  const [text, setText] = useState("")

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleOnSubmit = () => {
    if (!text) return
    updateTasks(
      {
        key: uuidv4(),
        groupName: groupName,
        contents: text,
        type: ItemTypes.card
      },
      index
    )
    setText("")
    displayNone()
  }

  return (
    <>
      <div className="">
        <textarea
          value={text}
          onChange={(e) => handleOnChange(e)}
          className="w-full p-2 text-sm"
        ></textarea>
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleOnSubmit()
            }}
            className={`flex-1 text-sm ${
              text ? "bg-green-500" : "bg-green-200"
            } rounded py-1 px-4 text-white`}
          >
            Add
          </button>
          <button
            className="flex-1 rounded bg-gray-200 py-1 px-4 text-sm"
            onClick={() => {
              setText("")
              displayNone()
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  )
}