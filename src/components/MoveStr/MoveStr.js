import React from 'react';
import { useState, useEffect } from "react";

import "./MoveStrStyle.css";


const MoveStr = ({setIsVisibleAge, isVisibleAge}) => {

    const [showText, setShowText] = useState(false);
    const [showText1, setShowText1] = useState(false);

    useEffect(() => {
        // Показуємо текст після 1 секунди
        const timer = setTimeout(() => {
            setShowText(true);
        }, 1000);
        // Зупиняємо таймер при видаленні компонента
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText1(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <div className={`text ${showText ? "show" : ""}`}>
                Hi if you want know, how old are you, click here
            </div>
            <div className={`text ${showText1 ? "show" : ""}`}><button onClick={()=>setIsVisibleAge(!isVisibleAge)}>click</button></div>
        </div>
    );
};

export default MoveStr;










