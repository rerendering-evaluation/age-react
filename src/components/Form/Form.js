import React from 'react';
import {useForm} from "react-hook-form";

import './FormStyle.css';


const Form = ({setAgePerson}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});

    const submit = (data) => {
        setAgePerson(data.dateAge);
        reset();
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('dateAge', {
                    required: 'Поле повинно бути заповнене!',
                    // pattern: {
                    //     value: /[A-Za-z]{3}/,
                    //     message: 'помилка вводу даних'
                    // }
                })} placeholder={'2000-00-00'}/>

                <button disabled={!isValid} className={'form-btn'}>send</button>

                <div>
                    {errors?.dateAge && <p>{errors?.dateAge?.message || 'Error'}</p>}
                </div>
            </form>
        </div>
    );
};

export default Form;