import React, { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
    generateWeeksInMonth,
    getFullMonthName,
    indexifyWeekDays
} from '@/app/util/calendar';

const StreakCalendar = ({startDate, endDate, activeDays}) => {
  const dateStarted = new Date(startDate);
  const dateEnded = new Date(endDate);
  const tmp_date = new Date()
  const today = new Date(tmp_date.getFullYear(), tmp_date.getMonth(), tmp_date.getDate())
  const weekDaysIdx = indexifyWeekDays(activeDays);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderMonth = (month, year) => {
    const weeks = generateWeeksInMonth(month, year);
    return (
        <>
        <div className="flex justify-between my-2">
            {weekDays.map(day => <span key={day}>{day}</span>)}
        </div>
        {weeks.map((week, index) => (
        <div key={index} className="flex justify-between my-2">
            {week.map((day, index) => (
            ((dateStarted <= day?.date) && (day?.date <= dateEnded)) ?
            <div
                key={index}
                className={clsx("streak-btn ",
                    {
                        'include': weekDaysIdx.includes(day?.date.getDay()) && ((day?.date - today) === 0),
                        'notdue': weekDaysIdx.includes(day?.date.getDay()) && ((day?.date - today) > 0),
                        'elapsed': weekDaysIdx.includes(day?.date.getDay()) && ((day?.date - today) < 0), 
                    }
                )}
            >
                {day ? day.day : ''}
            </div>:
            <div key={index} className='streak-btn'></div>
            ))}
        </div>
    ))}
    </>
    );
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="month-calendar bg-white">
      <div className="flex justify-between items-center mb-4">
        
        {((dateStarted.getMonth() < (currentMonth - 1)) || (dateStarted.getFullYear() < currentYear)) && 
        <button onClick={prevMonth} className="text-gray-600 w-[50px] rounded-md active:scale-95 hover:bg-gray-300 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        }
        <h2 className="text-lg font-bold">
          {`${getFullMonthName(currentYear, currentMonth - 1)} ${currentYear}`}
        </h2>
        
        { ((dateEnded.getMonth() > (currentMonth - 1)) || (dateEnded.getFullYear() > currentYear)) &&  
        <button onClick={nextMonth} className="text-gray-600 w-[50px] rounded-md active:scale-95 hover:bg-gray-300 transition-colors">
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
        }
      </div>
      <div className="calendar-body">
        {renderMonth(currentMonth, currentYear)}
      </div>
    </div>
  );
};

export default StreakCalendar;