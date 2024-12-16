import React from 'react';
import "./MyButton.css";


const MyButton = ({children, iconClass, ...props}) => {
    return (
        <div>
            <button {...props} className={`myBtn ${iconClass}`}>
                {children}
            </button>
        </div>
    );
};

export default MyButton;