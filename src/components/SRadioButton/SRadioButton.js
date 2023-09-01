import React from 'react';
import './SRadioButton.css';

const SRadioButton = ({color, selected, onClick, text}) => {
    const buttonStyle = {
        borderColor: color,
        backgroundColor: selected ? color : 'transparent',
        color: selected ? 'white' : color,
    };

    let className = 's-radio-button';
    if (selected) {
        className += ' selected';
    }

    return (
        <label className='s-radio-button-container'>
            <button className={className} style={buttonStyle} onClick={onClick}>
                <div className="inner-circle"></div>
            </button>
            <span className='s-radio-button-label'>{text}</span>
        </label>
    );
};

export default SRadioButton;
