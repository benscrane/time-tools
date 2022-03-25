import React from 'react';
import { CalendarDay } from '../CalendarDay';

export const CustomCalendar: React.FC = () => {
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
        return <CalendarDay data={dayData} dayIndex={index} />;
    });

    return (
        <div className="">
            <h1>Custom Calendar</h1>
            <div className="box-border h-full flex flex-col items-stretch border">

            </div>
        </div>
    );
};
