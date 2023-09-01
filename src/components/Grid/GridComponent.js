import React, {useState} from 'react';
import './GridComponent.css';
import {type} from "@testing-library/user-event/dist/type";

const GridComponent = ({columns, data}) => {
    const [sortedField, setSortedField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [filterValues, setFilterValues] = useState({});

    const sortedData = [...data].sort((a, b) => {
        if (sortedField) {
            const aValue = a[sortedField];
            const bValue = b[sortedField];

            if (sortOrder === 'asc') {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        }

        return 0;
    });

    const filteredData = sortedData.filter(item =>
        Object.keys(filterValues).every(key => {
                if (typeof item[key] === 'string') {
                    return item[key].toLowerCase().includes(filterValues[key].toLowerCase())
                }
                console.log('>>> filterValues: ', filterValues, item);
                return item[key] === +filterValues[key];
            }
        )
    );

    const handleHeaderClick = (field) => {
        if (sortedField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortedField(field);
            setSortOrder('asc');
        }
    };

    const handleFilterChange = (field, value) => {
        setFilterValues(prevFilterValues => ({
            ...prevFilterValues,
            [field]: value
        }));
    };

    return (
        <div className="grid-container">
            <div className="grid-header">
                {columns.map(column => (
                    <div
                        key={column.field}
                        className="grid-header-cell"
                        onClick={() => handleHeaderClick(column.field)}
                    >
                        {column.headerName}
                    </div>
                ))}
            </div>
            <div className="grid-body">
                {filteredData.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {columns.map(column => (
                            <div key={column.field} className="grid-cell">
                                {row[column.field]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="grid-filters">
                {columns.map(column => (
                    <div key={column.field} className="grid-filter">
                        <input
                            type="text"
                            placeholder={`Filter ${column.headerName}`}
                            value={filterValues[column.field] || ''}
                            onChange={(e) => handleFilterChange(column.field, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridComponent;
