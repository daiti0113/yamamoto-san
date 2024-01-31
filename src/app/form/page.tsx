"use client"

import { Button } from "@/components/atoms/button"
import { Input } from "@/components/molecules/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/molecules/form"
import { useForm } from "react-hook-form"
 
type FormState = {
    username: string
}

export default function SampleFormPage() {
    const form = useForm<FormState>()

    const onSubmit = (data: FormState) => console.log(data)
 
  return (
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
  )
}
