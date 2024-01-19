"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import axios from 'axios';

const TaskList = () => {
  const pathname = usePathname();
  const uuid = pathname.replace('/tasks/', '');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(uuid);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  if (!tasks) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
      <ul>
        {tasks.map((task) => (
          <Link href={`/tasks/${task.id}`} key={task.id} onClick={()=>setSelectedTask(task.id)}>
          <li className={clsx("mb-2 p-4 hover:bg-white rounded-md transition-colors ",
              {
                "bg-white": task.id === selectedTask,
              }
              )}
            >
            <h2 className="text-nowrap text-ellipsis overflow-hidden">{task.name}</h2>
            <p className="text-xs text-gray-500 text-nowrap text-ellipsis overflow-hidden">{task.description}</p>
          </li>
          </Link>
        ))}
      </ul>
  );
};

export default TaskList;
