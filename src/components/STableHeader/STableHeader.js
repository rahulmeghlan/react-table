import './STableHeader.css';

function STableHeaderCell({label, sortable, onSortChange}) {
    const handleSortClick = () => {
        if (sortable) {
            onSortChange(label);
        }
    }

    return (
        <div onClick={handleSortClick} className='s-table-header-cell'>
            <span> {label} {sortable ? <i className='fas fa-sort'></i> : ''}</span>
        </div>
    )
}

function STableHeader({headers, onSortChange, sortColumn}) {
    const isListView = headers.length > 3;
    return (
        <div className={`table-header ${isListView ? 'list-view' : ''}`}>
            {headers.map((header, index) => (
                <STableHeaderCell
                    key={index}
                    label={header.label}
                    sortable={header.sortable}
                    onSortChange={onSortChange}
                />
            ))}
        </div>
    );
}

export default STableHeader