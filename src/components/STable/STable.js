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
    const [selectState, setSelectState] = useState(false); //Initial select state

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
        let totalSelectCount = 0;
        sorted = sortedData.map(item => {
            if (selectType === 'multiple') {
                if (this.id === item.id) {
                    item.selected = !item.selected;
                }
                if (item.selected) {
                    ++totalSelectCount;
                }
                return item;
            }

            if (item.id !== this.id) {
                item.selected = false;
            } else {
                item.selected = !item.selected
            }

            return item
        });


        setSelectState(totalSelectCount === sortedData.length);
        setSortedData(sorted);

    }

    function handleHeaderSelectionChange() {
        let sorted = sortedData.map(item => {
            item.selected = !selectState;
            return item;
        });
        setSelectState(!selectState);
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
                          onSelectionChange={handleHeaderSelectionChange}
                          selectState={selectState}
                          selectType={selectType}
                          color={color}/>
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
