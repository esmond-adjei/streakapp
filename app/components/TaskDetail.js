import React, { useState, useEffect } from 'react';
import StreakCalendar from './StreakCalendar';
import Loader from './loader';
import { getTask } from '../api';

const TaskDetail = ({ taskId }) => {
  const [taskDetails, setTaskDetails] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
        const task = await getTask( taskId );
        setTaskDetails(task);
    };

    fetchTaskDetails();
  }, [taskId]);

  if (!taskDetails) {
    return <div className="flex items-center justify-center w-full h-full"><Loader/></div>
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-3xl text-blue-500 font-bold mb-4">{taskDetails.name}</h2>
      <p className="text-gray-600">{taskDetails.description}</p><br />
      <small>
        This task started on <span>{taskDetails.start_date}</span> at <span>{taskDetails.start_time}</span>
        and I am going to do it for <span>{taskDetails.completion_period}</span> days 
        by spending <span>{taskDetails.duration_per_day} minutes</span> per day on it on 
        <span>{taskDetails.active_days.map((day) => day).join(', ')}</span> in every week until 
        <span>{taskDetails.end_date}</span>. 
      </small>
      <div className="mt-8">
        <StreakCalendar
          startDate={taskDetails.start_date}
          endDate={taskDetails.end_date}
          activeDays={taskDetails.active_days}
        />
      </div>
    </div>
  );
};

export default TaskDetail;
