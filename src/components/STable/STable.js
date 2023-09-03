// Table.js
import React, {useState} from 'react';
import STableHeader from '../STableHeader';
import STableBody from '../STableBody';
import SList from '../SList';
import './STable.css';

function Table({headers, rows, mobileView, title, selectType, color}) {
    const [sortedData, setSortedData] = useState(rows);
    const [sortDirection, setSortDirection] = useState('asc'); //Initial sorting direction

    const handleSortChange = (headerIndex) => {
        const isAscending = sortDirection === 'asc';
        // Sort the data based on the selected header and direction
        const sorted = [...sortedData].sort((a, b) => {
            console.log(a)
            if (a[headerIndex] < b[headerIndex]) {
                return isAscending ? -1 : 1;
            }
            if (a[headerIndex] > b[headerIndex]) {
                return isAscending ? 1 : -1;
            }
            return 0;
        });

        setSortDirection(isAscending ? 'desc' : 'asc');
        setSortedData(sorted);

    }

    if (mobileView) {
        return (
            <SList headers={headers} data={sortedData} title={title}></SList>
        );
    }
    return (
        <div className="table">
            <STableHeader headers={headers}
                          onSortChange={handleSortChange}
                          selectType={selectType} color={color}/>
            <div className="table-body">
                {sortedData.map((rowData, index) => (
                    <STableBody key={index} rowData={rowData.data}
                                selectType={selectType}
                                color={color} />
                ))}
            </div>
        </div>
    );
}

export default Table;
