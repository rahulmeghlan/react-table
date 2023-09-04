// Table.js
import React, {useState} from 'react';
import STableHeader from '../STableHeader';
import STableBody from '../STableBody';
import SList from '../SList';
import './STable.css';
import '../../styles/dark-theme.css';

/**
 * Table Component
 *
 * @param {Array} headers - An array of objects representing table headers.
 * @param {Array} rows - An array of data rows for the table.
 * @param {boolean} mobileView - Indicates if the table is displayed in mobile view.
 * @param {string} title - The title of the table.
 * @param {string} selectType - Type of selection ('single', 'multiple', or undefined).
 * @param {string} color - The color code for the table.
 * @param {string} theme - The theme ('dark' or undefined) for the table.
 *
 * @returns {JSX.Element} - Returns the table component.
 */
function Table({headers, rows, mobileView, title, selectType, color, theme}) {
    const [sortedData, setSortedData] = useState(rows);
    const [selectState, setSelectState] = useState(false); //Initial select state
    const defaultRows = JSON.parse(JSON.stringify(rows));

    /**
     * Handle Sorting of Table Data
     *
     * @param {Number} sortHeaderIndex - Column Index that was clicked
     * @param {Object} header - The header object that was clicked.
     */
    const handleSortChange = ({sortHeaderIndex, header}) => {
        if (header.sortDirection === 'default') {
            setSortedData(defaultRows);
            return;
        }
        // Sort the data based on the selected header and direction
        const sorted = [...sortedData].sort((a, b) => {
            if (a.data[sortHeaderIndex] === b.data[sortHeaderIndex]) {
                return 0;
            }
            if (header.sortDirection === 'asc') {
                return a.data[sortHeaderIndex] < b.data[sortHeaderIndex] ? -1 : 1;
            }

            if (header.sortDirection === 'desc') {
                return a.data[sortHeaderIndex] > b.data[sortHeaderIndex] ? -1 : 1;
            }
        });


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
            <SList headers={headers}
                   data={sortedData}
                   title={title}
                   selectType={selectType}
                   color={color}
                   theme={theme}></SList>
        );
    }
    return (
        <div className={`${theme ? `${theme}-theme` : ''} table`}>
            <STableHeader headers={headers}
                          onSortChange={handleSortChange.bind(headers)}
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
