"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/organisms/Table"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/organisms/Dialog"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/molecules/select"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/atoms/button"
import { Input } from "@/components/molecules/input"
import { Checkbox } from "@/components/molecules/checkbox"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/organisms/DropdownMenu"
import { useState } from "react"
import { PostUserRequest, User } from "@/types/typescript-axios"
import dayjs, { calcAge } from "@/lib/date"
import { defaultApi } from "@/lib/api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Label } from "@/components/molecules/label"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/molecules/form"
import Link from "next/link"

const ApplicantsPage = ({ }) => {
  const { data, isLoading } = useQuery({ queryKey: ["fetchApplicants"], queryFn: () => defaultApi.getUsers().then((response) => response.data) })

  if (isLoading) return <div>Loading...</div>

  if (!data) return <div>候補者が存在しません</div>

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default ApplicantsPage


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

// TODO: コンポーネントの分割（TableHeaderなどに分割する）
// eslint-disable-next-line max-lines-per-function
function DataTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const [rowSelection, setRowSelection] = useState({})


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex gap-2 ml-auto">
          <AddApplicantModal />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                項目編集
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter(
                  (column) => column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex">
        <div className="flex-1 text-sm text-muted-foreground p-4">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
 
const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    id: "userName",
    header: "ユーザー名",
    cell: ({ row }) => <Link href={`/applicants/${row.original.id}`}>{row.original.lastName} {row.original.firstName}</Link>
  },
  {
    accessorKey: "age",
    header: "年齢",
    accessorFn: (row) => row.dateOfBirth ? calcAge(row.dateOfBirth) : "-"
  },
  {
    accessorKey: "preferredWorkLocation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          希望勤務地
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: "referralCount",
    header: "紹介数"
  },
  {
    accessorKey: "applicationCount",
    header: "応募数"
  },
  {
    accessorKey: "progress",
    header: "進捗",
    accessorFn: (row) => progresses[row.progress as keyof typeof progresses]
  },
  {
    accessorKey: "priority",
    header: "優先度",
    accessorFn: (row) => priorities[row.priority as keyof typeof priorities]
  },
  {
    accessorKey: "personInCharge",
    header: "担当"
  },
  {
    accessorKey: "updatedAt",
    header: "最終更新日",
    accessorFn: (row) => dayjs(row.updatedAt).format("YYYY/MM/DD")
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id.toString())}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
 
const progresses = {
  1: "書類選考",
  2: "1次調整中",
  3: "2次調整中",
  4: "3次調整中"
}

const priorities = {
  1: "高",
  2: "中",
  3: "低"
}

// eslint-disable-next-line max-lines-per-function
const AddApplicantModal = () => {
  const { mutateAsync } = useMutation({ mutationKey: ["createApplicant"], mutationFn: (data: PostUserRequest) => defaultApi.postUser(data).then((response) => response.data) })
  const form = useForm<PostUserRequest>()
  const [isOpen, setIsOpen] = useState(false)

  const onSubmit = async (data: PostUserRequest) => {
    console.log({ data })
    await mutateAsync(data)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">候補者登録</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>候補者登録</DialogTitle>
              <DialogDescription>
                候補者を登録できます。
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  名前
                </Label>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="候補" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="太郎" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  登録ルート
                </Label>
                <FormField
                  control={form.control}
                  name="registRoute"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="登録ルートを選択してください" {...field} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>登録ルート</SelectLabel>
                              <SelectItem value="apple">Apple</SelectItem>
                              <SelectItem value="banana">Banana</SelectItem>
                              <SelectItem value="blueberry">Blueberry</SelectItem>
                              <SelectItem value="grapes">Grapes</SelectItem>
                              <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button variant="outline">キャンセル</Button>
              </DialogClose>
              <Button type="submit">登録する</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
