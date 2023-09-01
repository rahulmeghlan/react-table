import React from 'react';
import './SCheckbox.css';

const SCheckbox = ({
                       checked,
                       onChange,
                       label,
                       color
                   }) => {
    const checkBoxColor = {
        backgroundColor: color,
        borderColor: color
    };
    return (
        <label className="s-checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span style={checked ? checkBoxColor : {}} className="checkmark"></span>
            <span className="label">{label}</span>
        </label>
    );
};

export default SCheckbox;
