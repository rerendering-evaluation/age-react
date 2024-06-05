import { memo } from "react";
import React, { useState } from 'react';
import './LayoutStyle.css';
import Age from "../components/Age/Age";
import MoveStr from "../components/MoveStr/MoveStr";
const Layout = memo(() => {
  const [isVisibleAge, setIsVisibleAge] = useState(false);
  return <div className={'layout'}>
            <MoveStr setIsVisibleAge={setIsVisibleAge} isVisibleAge={isVisibleAge} />
            {isVisibleAge && <Age />}
        </div>;
});
export default Layout;