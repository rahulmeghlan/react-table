// List.js
import React, {useState} from 'react';
import './SList.css';
import '../../styles/dark-theme.css';
import SCheckbox from "../SCheckbox";

function SList({headers, data, title, theme, selectType, color}) {
    const [selectState, setSelectState] = useState(false); //Initial select state
    const [sortedData, setSortedData] = useState(data);

    function handleHeaderSelectionChange() {
        let sorted = sortedData.map(item => {
            item.selected = !selectState;
            return item;
        });
        setSelectState(!selectState);
        setSortedData(sorted);
    }

    function handleSelectionChange() {
        let totalSelectCount = 0;
        let sorted = sortedData.map(item => {
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



        setSelectState(totalSelectCount === data.length);
        setSortedData(sorted);

    }

    if (selectType === 'multiple') {
        return (
            <div className={`${theme ? `${theme}-theme` : ''} s-list s-list-multiselect`}>

                <div className="s-list-title">
                    <SCheckbox classname="s-list-checkbox"
                               onChange={handleHeaderSelectionChange}
                               color={color}
                               checked={selectState}/>
                    <span>{title ? title : ''}</span>
                </div>

                <div className="s-list-items">
                    {
                        sortedData.map((row, index) => (
                            <div key={index} className="s-list-item">
                                <div className="s-list-item-checkbox">
                                    <SCheckbox classname="s-list-checkbox"
                                               onChange={handleSelectionChange.bind(row)}
                                               color={color}
                                               checked={row.selected}/>
                                </div>
                                <div className="s-list-item-header">
                                    {
                                        headers.map((header, hIndex) => (
                                            <div key={hIndex} className="s-list-item-header-title">{header.label}:</div>
                                        ))
                                    }
                                </div>
                                <div className="s-list-item-body">
                                    {
                                        row.data.map((item, iIndex) => (
                                            <div key={iIndex} className="s-list-item-body-title">{item}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

    return (
        <div className={`${theme ? `${theme}-theme` : ''} s-list`}>
            {title ? <div className="s-list-title">{title}</div> : ''}
            <div className="s-list-items">
                {
                    sortedData.map((items, index) => (
                        <div key={index} className="s-list-item">
                            <div className="s-list-item-header">
                                {
                                    headers.map((header, hIndex) => (
                                        <div key={hIndex} className="s-list-item-header-title">{header.label}:</div>
                                    ))
                                }
                            </div>
                            <div className="s-list-item-body">
                                {
                                    items.data.map((item, iIndex) => (
                                        <div key={iIndex} className="s-list-item-body-title">{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SList;
