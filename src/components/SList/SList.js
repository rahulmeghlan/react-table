// List.js
import React, {useState} from 'react';
import './SList.css';
import '../../styles/dark-theme.css';
import SCheckbox from "../SCheckbox";
import SRadioButton from "../SRadioButton";

/**
 * SList Component
 *
 * The `SList` component is a flexible list view component that allows you to display data
 * in a customizable list format. It supports various selection modes, themes, and provides
 * options for rendering headers and body content.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.headers - An array of header objects that define the column headers for the list.
 * @param {Array} props.data - An array of data objects representing the rows of the list.
 * @param {string} [props.title] - The title of the list, displayed at the top of the component.
 * @param {string} [props.theme] - The theme of the list. Can be set to 'light' or 'dark'. The default is 'light'.
 * @param {string} [props.selectType] - The selection type for the list. Can be set to 'single', 'multiple', or left
 *   undefined for no selection. The default is undefined.
 * @param {string} [props.color] - The color theme for the list's selection controls (checkboxes or radio buttons).
 *   You can specify a color code or name.
 * @returns {JSX.Element} The rendered `SList` component.
 */
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

    if (selectType === 'single') {
        return (
            <div className={`${theme ? `${theme}-theme` : ''} s-list s-list-single-select`}>

                <div className="s-list-title">
                    <span>{title ? title : ''}</span>
                </div>

                <div className="s-list-items">
                    {
                        sortedData.map((row, index) => (
                            <div key={index} className="s-list-item">
                                <div className="s-list-item-checkbox">
                                    <SRadioButton
                                        color={color}
                                        onClick={handleSelectionChange.bind(row)}
                                        selected={row.selected}/>
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
