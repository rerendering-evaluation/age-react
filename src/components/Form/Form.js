import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './FormStyle.css';


const Form = ({setAgePerson}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const [showTextForm, setShowTextForm] = useState(false);

    const submit = (data) => {
        const fullAge = data.year + '-' + data.month + '-' + data.day;
        setAgePerson(fullAge);
        reset();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTextForm(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className={'form'}>
            <div className={`textForm ${showTextForm ? "showForm" : ""}`}>
                Write your birthday day
            </div>

            <form onSubmit={handleSubmit(submit)}>
                <label>year:</label>
                <input type="number" {...register('year', {
                    required: 'Поле повинно бути заповнене!',
                })} placeholder={'0000'}/>

                <label>month:</label>
                <input type="number" {...register('month', {
                    required: 'Поле повинно бути заповнене!',
                })} placeholder={'00'}/>

                <label>day:</label>
                <input type="number" {...register('day', {
                    required: 'Поле повинно бути заповнене!',
                })} placeholder={'00'}/>

                <button disabled={!isValid} className={'form-btn'}>ok</button>

                <div>
                    {errors?.dateAge && <p>{errors?.dateAge?.message || 'Error'}</p>}
                </div>
            </form>
        </div>
    );
};

export default Form;