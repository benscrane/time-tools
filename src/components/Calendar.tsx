import React from 'react';
import { CalendarDay } from './CalendarDay';

export const Calendar: React.FC = () => {
    const calendarData = [
        [{
            name: 'Sleep',
            start: 0,
            duration: 240,
        }],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    const days = calendarData.map((dayData, index) => {
        return <CalendarDay data={dayData} dayIndex={index} />
    });

    return (
        <div>
            <h1>Calendar</h1>
            <div className="columns-7 gap-2">
                {days}
            </div>
        </div>
    );
};
