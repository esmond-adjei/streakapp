"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faPlus } from '@fortawesome/free-solid-svg-icons';

import Search from '@/app/components/search';
import Loader from './loader';
import CreateTask from './CreateTask';

import { getTaskList } from '../api';

const TaskList = () => {
  const pathname = usePathname();
  const uuid = pathname.replace('/tasks/', '');
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(uuid);
  const [enableCreateTask, setEnableCreateTask] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasklist = await getTaskList();
        console.log(">> taskslist: ", tasklist);
        setTasks(tasklist);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTasks();
  }, []);

  if (!tasks) {
    return <p className="text-center mt-4"><Loader/></p>;
  }

  return (
    <>
      <header className="sticky top-0 flex flex-col gap-2 bg-blue-100 p-4 border-b-2 border-blue-200">

        <Link href="/" >
          <h6 className="text-sm text-blue-500 font-bold">
            <FontAwesomeIcon icon={faBullseye} className='mr-1' />
            Streaker
          </h6>
        </Link>

        <Search />

        <button
          onClick={() => setEnableCreateTask(true)}
          className="flex items-center gap-2 text-white py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-lg">
          <FontAwesomeIcon icon={faPlus} />
          <small>New Goal</small>
        </button>

      </header>

      {
        enableCreateTask &&
        <div
          className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <CreateTask closeWindow={setEnableCreateTask} />
        </div>
      }

      <ul className='p-4'>
        {tasks.length === 0 ?
          <div className="flex items-center justify-center w-full h-full"><Loader /></div>
          :
          tasks.map((task) => (
            <Link href={`/tasks/${task.id}`} key={task.id} onClick={() => setSelectedTask(task.id)}>
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
          ))
        }
      </ul>
    </>
  );
};

export default TaskList;
