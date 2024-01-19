"use client"
import { usePathname } from 'next/navigation';
import TaskDetail from '../../components/TaskDetail';

export default function TaskView() {
  const pathname = usePathname();
  const uuid = pathname.replace('/tasks/', '');
  
  return (
    <>
      <TaskDetail taskId={uuid} />
    </>
  );
};
