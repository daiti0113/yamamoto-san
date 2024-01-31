import { Sidebar } from "@/components/organisms/sidebar"

export default function SampleLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex">
      <Sidebar className="h-full max-w-80 border-r-[1px]" />
      <div className="py-7 px-6">
        {children}
      </div>
    </main>
  )
}
