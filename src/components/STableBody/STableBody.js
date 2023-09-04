// TableBodyCell.js
import React, {useState} from 'react';
import './STableBody.css';
import SCheckbox from "../SCheckbox";
import SRadioButton from "../SRadioButton";

function TableBodyCell({content}) {
    return <div className="table-body-cell">{content}</div>;
}

function STableBodyRow({rowData, selectType, color, onSelectionChange}) {
    let columns = rowData.data.length;
    let gridColumnStyle = {gridTemplateColumns: `repeat(${selectType ? columns + 1 : columns}, 1fr)`}

    if (!selectType) {
        return (
            <div className="table-body-row" style={gridColumnStyle}>
                {rowData.data.map((cellContent, index) => (
                    <TableBodyCell key={index} content={cellContent}/>
                ))}
            </div>
        );
    }

    if (selectType === 'single') {
        return (
            <div className="table-body-row" style={gridColumnStyle}>
                <div className="table-body-cell">

                    <SRadioButton
                        color={color}
                        onClick={onSelectionChange}
                        selected={rowData.selected}/>
                </div>
                {rowData.data.map((cellContent, index) => (
                    <TableBodyCell key={index} content={cellContent}/>
                ))}
            </div>
        );
    }

    return (
        <div className="table-body-row" style={gridColumnStyle}>

            <div className="table-body-cell">
                <SCheckbox color={color}
                           onChange={onSelectionChange}
                           checked={rowData.selected}/>
            </div>
            {rowData.data.map((cellContent, index) => (
                <TableBodyCell key={index} content={cellContent}/>
            ))}
        </div>
    );


}

export default STableBodyRow;
