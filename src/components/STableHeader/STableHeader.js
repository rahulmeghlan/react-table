import SCheckbox from "../SCheckbox";
import './STableHeader.css';
import IconAsc from '../../assets/up.png';
import IconDesc from '../../assets/down.png';
import IconDefault from '../../assets/default.png';
import {useState} from "react";

function STableHeaderCell({header, onSortChange, sortHeaderIndex}) {
    const [icon, setIcon] = useState(IconDefault);
    const handleSortClick = () => {
        if (header.sortable) {
            switch (header.sortDirection) {
                case 'asc':
                    header.sortDirection = 'desc';
                    setIcon(IconDesc)
                    break;
                case 'desc':
                    header.sortDirection = 'default';
                    setIcon(IconDefault)
                    break;
                case 'default':
                    header.sortDirection = 'asc';
                    setIcon(IconAsc)
                    break;
                default:
                    header.sortDirection = 'default';
                    setIcon(IconDefault)
            }

            onSortChange({sortHeaderIndex, header});
        }
    }

    return (
        <div onClick={handleSortClick} className={`s-table-header-cell ${header.sortable && 'sortable'}`}>
            <span> {header.label} </span>

            {header.sortable &&
                <img className='sort-icon' src={icon} />
            }
        </div>
    )
}

function STableHeader({headers, onSortChange, selectType, color, onSelectionChange, selectState}) {
    let gridColumnStyle = {gridTemplateColumns: `repeat(${headers.length}, 1fr)`};

    if (!selectType) {
        return (
            <div className="table-header" style={gridColumnStyle}>
                {headers.map((header, index) => (
                    <STableHeaderCell
                        key={index}
                        header={header}
                        sortHeaderIndex={index}
                        onSortChange={onSortChange}
                    />
                ))}
            </div>
        );
    }

    if (selectType === 'multiple') {
        gridColumnStyle = {gridTemplateColumns: `repeat(${headers.length + 1}, 1fr)`}
        return (
            <div className="table-header" style={gridColumnStyle}>
                <div className="s-table-header-cell">
                    <SCheckbox onChange={onSelectionChange}
                               color={color}
                               checked={selectState}/>
                </div>
                {headers.map((header, index) => (
                    <STableHeaderCell
                        key={index}
                        header={header}
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

                </div>
                {headers.map((header, index) => (
                    <STableHeaderCell
                        key={index}
                        header={header}
                        sortHeaderIndex={index}
                        onSortChange={onSortChange}
                    />
                ))}
            </div>
        );
    }

}

export default STableHeader