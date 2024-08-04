'use client'
import { useRouter } from "next/navigation";
export default function Settings() {
  const router = useRouter();
  const back = ()=>{
    router.push('/dashboard');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={back} className="bg-blue-500 rounded text-white py-2 px-4">Back</button>
      <h1>hi settings</h1>
    </main>
  );
}
