import React, {useEffect, useState} from 'react';

import './AgeStyle.css';


const Age = () => {
    const [age, setAge] = useState({years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});

    useEffect(() => {
        const interval = setInterval(()=>{
            const birthday = new Date('1983-09-08');
            const now = new Date();
            const diff = now.getTime() - birthday.getTime();
            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor(diff / (1000 * 60));
            const seconds = Math.floor(diff / 1000);

            setAge({ years, months, days, hours, minutes, seconds });
        }, 1000);

        return ()=> clearInterval(interval);
    }, []);


    return (
        <div className={'age'}>
            <p>Years: {age.years}</p>
            <p>Months: {age.months}</p>
            <p>Days: {age.days}</p>
            <p>Hours: {age.hours}</p>
            <p>Minutes: {age.minutes}</p>
            <p>Seconds: {age.seconds}</p>
        </div>
    );
};

export default Age;