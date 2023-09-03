import SCheckbox from "../SCheckbox";
import './STableHeader.css';
import {useState} from "react";

function STableHeaderCell({label, sortable, onSortChange, sortHeaderIndex}) {
    const handleSortClick = () => {
        if (sortable) {
            onSortChange(sortHeaderIndex);
        }
    }

    return (
        <div onClick={handleSortClick} className='s-table-header-cell'>
            <span> {label} <i className='fas fa-sort'></i></span>
        </div>
    )
}

function STableHeader({headers, onSortChange, selectType, color}) {
    const [isChecked, setIsChecked] = useState(false); //Initial checkbox state
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    let gridColumnStyle = {gridTemplateColumns: `repeat(${headers.length}, 1fr)`};

    if (!selectType) {
        return (
            <div className="table-header" style={gridColumnStyle}>
                {headers.map((header, index) => (
                    <STableHeaderCell
                        key={index}
                        label={header.label}
                        sortable={header.sortable}
                        sortHeaderIndex={index}
                        onSortChange={onSortChange}
                    />
                ))}
            </div>
        );
    }

    if (selectType === 'single') {
        gridColumnStyle = {gridTemplateColumns: `repeat(${headers.length + 1}, 1fr)`}
        return (
            <div className="table-header" style={gridColumnStyle}>
                <div className="s-table-header-cell">
                    <SCheckbox onChange={handleCheckboxChange} color={color} checked={isChecked}/>
                </div>
                {headers.map((header, index) => (
                    <STableHeaderCell
                        key={index}
                        label={header.label}
                        sortable={header.sortable}
                        sortHeaderIndex={index}
                        onSortChange={onSortChange}
                    />
                ))}
            </div>
        );
    }

}

export default STableHeader