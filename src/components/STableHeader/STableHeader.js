import SCheckbox from "../SCheckbox";
import './STableHeader.css';

function STableHeaderCell({header, onSortChange, sortHeaderIndex}) {
    const handleSortClick = () => {
        if (header.sortable) {
            switch (header.sortDirection) {
                case 'asc':
                    header.sortDirection = 'desc';
                    break;
                case 'desc':
                    header.sortDirection = 'default';
                    break;
                case 'default':
                    header.sortDirection = 'asc';
                    break;
                default:
                    header.sortDirection = 'default';
            }

            onSortChange({sortHeaderIndex, header});
        }
    }

    return (
        <div onClick={handleSortClick} className={`s-table-header-cell ${header.sortable && 'sortable'}`}>
            <span> {header.label} {header.sortable ? `(${header.sortDirection})` : ''}</span>
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