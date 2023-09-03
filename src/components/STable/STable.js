// Table.js
import React from 'react';
import STableHeader from '../STableHeader';
import STableBody from '../STableBody';
import SList from '../SList';
import './STable.css';

function Table({headers, data, onSortChange, onCheckboxChange, mobileView, title}) {
    if (mobileView) {
        return (
            <SList headers={headers} data={data} title={title}></SList>
        );
    }
    return (
        <div className="table">
            <STableHeader headers={headers} onSortChange={onSortChange} onCheckboxChange={onCheckboxChange}/>
            <div className="table-body">
                {data.map((rowData, index) => (
                    <STableBody key={index} rowData={rowData}/>
                ))}
            </div>
        </div>
    );
}

export default Table;
