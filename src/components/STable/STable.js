// Table.js
import React, {useState} from 'react';
import STableHeader from '../STableHeader';
import STableBody from '../STableBody';
import SList from '../SList';
import './STable.css';
import '../../styles/dark-theme.css';

function Table({headers, rows, mobileView, title, selectType, color, theme}) {
    const [sortedData, setSortedData] = useState(rows);
    const [sortDirection, setSortDirection] = useState('asc'); //Initial sorting direction

    const handleSortChange = (headerIndex) => {
        const isAscending = sortDirection === 'asc';
        // Sort the data based on the selected header and direction
        const sorted = [...sortedData].sort((a, b) => {
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

    function handleSelectionChange() {
        let sorted;
        if (selectType === 'single') {
            sorted = sortedData.map(item => {
                if (item.id !== this.id) {
                    item.selected = false;
                } else {
                    item.selected = !item.selected
                }

                return item
            });
        }

        setSortedData(sorted);

    }

    if (mobileView) {
        return (
            <SList headers={headers} data={sortedData} title={title}></SList>
        );
    }
    return (
        <div className={`${theme ? `${theme}-theme` : ''} table`}>
            <STableHeader headers={headers}
                          onSortChange={handleSortChange}
                          selectType={selectType} color={color}/>
            <div className="table-body">
                {sortedData.map((rowData, index) => (
                    <STableBody key={index}
                                rowData={rowData}
                                selectType={selectType}
                                onSelectionChange={handleSelectionChange.bind(rowData)}
                                color={color}/>
                ))}
            </div>
        </div>
    );
}

export default Table;
