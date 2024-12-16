import React from 'react';
import "./MyInput.css"

const MyInput = (props) => {
    return (
        <div className="myInput">
            <label>
                {/* eslint-disable-next-line react/prop-types */}
                {props.name}
            </label>
            <input {...props} className="form__input"/>
        </div>
    );
};

export default MyInput;