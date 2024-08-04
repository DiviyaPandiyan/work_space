import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>hi Home</h1>
     <Link className="text-blue-400" href='/dashboard' >dashboard</Link>
     <Link className="text-blue-400" href='/dashboard/settings' >settings</Link>
    </main>
  )
}
