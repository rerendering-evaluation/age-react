import { memo } from "react";
import React from 'react';
import { useState, useEffect } from "react";
import "./MoveStrStyle.css";
const MoveStr = memo(({
  setIsVisibleAge,
  isVisibleAge
}) => {
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText1(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <div className="container">
            <div className={`text ${showText ? "show" : ""}`}>
                Hi, if you want know, how old are you, click here
            </div>

            <div className={`text ${showText1 ? "show" : ""}`}>
                <button onClick={() => setIsVisibleAge(!isVisibleAge)} className={'btn'}>show
                </button>
            </div>
        </div>;
});
export default MoveStr;