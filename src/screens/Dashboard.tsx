import React, { useState } from 'react';
import { Calendar as BigCalendar } from '../components/Calendar';
import { CustomCalendar } from '../components/CustomCalendar';

export const Dashboard: React.FC = () => {
    const [showCustom, setShowCustom] = useState(true);

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => setShowCustom(!showCustom)}>Toggle Calendar</button>
            {
                showCustom
                ? <CustomCalendar />
                : <BigCalendar />
            }
        </div>
    )
};
