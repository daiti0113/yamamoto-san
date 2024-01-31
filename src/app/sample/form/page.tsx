"use client"

import { Button } from "@/components/atoms/button"
import { Input } from "@/components/molecules/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/molecules/form"
import { useForm } from "react-hook-form"
import { useState } from "react"
 
type FormState = {
    username: string
}

// eslint-disable-next-line max-lines-per-function
export default function SampleFormPage() {
  const form = useForm<FormState>()
  const [values, setValues] = useState<FormState>()

  const onSubmit = (data: FormState) => setValues(data)

  return (
    <div>
      {/* TODO: Headline コンポーネント作る */}
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">サンプルフォーム</h1>
      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div className="mt-10">
        <p>入力内容： {values?.username}</p>
      </div>
    </div>
  )
}
