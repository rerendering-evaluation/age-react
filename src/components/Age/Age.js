import React, {useEffect, useState} from 'react';

import './AgeStyle.css';
import Form from "../Form/Form";


const Age = () => {
    const [age, setAge] = useState({years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0});
    const [agePerson, setAgePerson] = useState('1970-01-01');

    useEffect(() => {
        const interval = setInterval(() => {
            let birthday = new Date(agePerson);
            let now = new Date();
            let diff = Math.abs(now.getTime() - birthday.getTime());

            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            diff -= years * (1000 * 60 * 60 * 24 * 365.25);

            const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
            diff -= months * (1000 * 60 * 60 * 24 * 30.44);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);

            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);

            const minutes = Math.floor(diff / (1000 * 60));
            diff -= minutes * (1000 * 60);

            const seconds = Math.floor(diff / 1000);

            setAge({years, months, days, hours, minutes, seconds});
        }, 1000);

        return () => clearInterval(interval);
    }, [agePerson]);


    return (
        <div className={'age'}>
            <Form setAgePerson={setAgePerson}/>

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