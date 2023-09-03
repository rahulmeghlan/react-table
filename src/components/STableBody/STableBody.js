// TableBodyCell.js
import React from 'react';
import './STableBody.css';

function TableBodyCell({ content }) {
    return <div className="table-body-cell">{content}</div>;
}

function STableBodyRow({ rowData }) {
    return (
        <div className="table-body-row">
            {rowData.map((cellContent, index) => (
                <TableBodyCell key={index} content={cellContent} />
            ))}
        </div>
    );
}

export default STableBodyRow;
