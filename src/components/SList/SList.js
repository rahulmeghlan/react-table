// List.js
import React from 'react';
import './SList.css';

function SList({headers, data, title}) {
    return (
        <div className="s-list">
            {title ? <div className="s-list-title">{title}</div> : ''}
            <div className="s-list-items">
                {
                    data.map((items, index) => (
                        <div key={index} className="s-list-item">
                            <div className="s-list-item-header">
                                {
                                    headers.map((header, hIndex) => (
                                        <div key={hIndex} className="s-list-item-header-title">{header.label}:</div>
                                    ))
                                }
                            </div>
                            <div className="s-list-item-body">
                                {
                                    items.data.map((item, iIndex) => (
                                        <div key={iIndex} className="s-list-item-body-title">{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SList;
