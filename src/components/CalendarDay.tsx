import React from 'react';

interface EventData {
    name: string;
    start: number;
    duration: number;
}

interface CalendarDayProps {
    data: EventData[];
    dayIndex: number;
}

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const CalendarDay: React.FC<CalendarDayProps> = ({ data, dayIndex }) => {

    const intervalLength = 30;
    const slotCount = (24 * 60) / intervalLength;

    return (
        <div className="border">
            <span>{days[dayIndex]}</span>
            <div className="border-red-600 border">
                Test
            </div>
        </div>
    );
};
