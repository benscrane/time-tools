import React from 'react';
import { Calendar as ReactBigCalendar, luxonLocalizer } from 'react-big-calendar';
import { DateTime } from 'luxon';
import { CalendarDay } from '../CalendarDay';
import './calendar.scss';

const localizer = luxonLocalizer(DateTime);

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
        return <CalendarDay data={dayData} dayIndex={index} />;
    });

    return (
        <div className="">
            <h1>Calendar</h1>
            <ReactBigCalendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                views={['week']}
                defaultView='week'
                toolbar={false}
                />
        </div>
    );
};
