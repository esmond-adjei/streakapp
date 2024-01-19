import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto mt-4">
      <h1 className="text-4xl font-bold mb-4">Streak</h1>
      <p className="text-gray-600 mb-8">Track your daily habits</p>
      <Link href="/tasks" className="text-blue-500 hover:underline">
        View All Tasks
      </Link>
    </main>
  )
}
