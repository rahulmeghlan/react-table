// TableBodyCell.js
import React, {useState} from 'react';
import './STableBody.css';
import SCheckbox from "../SCheckbox";

function TableBodyCell({content}) {
    return <div className="table-body-cell">{content}</div>;
}

function STableBodyRow({rowData, selectType, color}) {
    let columns = rowData.length;
    let gridColumnStyle = {gridTemplateColumns: `repeat(${selectType ? columns + 1 : columns}, 1fr)`}
    const [isChecked, setIsChecked] = useState(false); //Initial checkbox state

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    if (!selectType) {
        return (
            <div className="table-body-row" style={gridColumnStyle}>
                {rowData.map((cellContent, index) => (
                    <TableBodyCell key={index} content={cellContent}/>
                ))}
            </div>
        );
    }

    return (
        <div className="table-body-row" style={gridColumnStyle}>

            <div className="table-body-cell">
                <SCheckbox color={color}
                           onChange={handleCheckboxChange}
                           checked={isChecked}/>
            </div>
            {rowData.map((cellContent, index) => (
                <TableBodyCell key={index} content={cellContent}/>
            ))}
        </div>
    );


}

export default STableBodyRow;
