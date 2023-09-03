import './STableHeader.css';

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

function STableHeader({headers, onSortChange, sortColumn}) {
    return (
        <div className="table-header">
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

export default STableHeader