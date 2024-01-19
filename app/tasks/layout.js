import TaskList from '../components/TaskList';

export default function TaskLayout({ children }) {
  return (
    <main className="overflow-hidden flex flex-col md:flex-row">
      <div className="bg-gray-300 p-4 md:h-screen md:w-1/3 overflow-y-auto">
        <TaskList />
      </div>
      <div className="bg-white p-4 md:h-screen w-full overflow-y-auto">
        {children}
      </div>
    </main>
  )
}