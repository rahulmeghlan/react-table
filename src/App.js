// example/src/App.js

import React, {useState} from 'react';
import GridComponent from './components/Grid';
import SRadioButton from "./components/SRadioButton";
import SCheckbox from "./components/SCheckbox";

const App = () => {
    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'name', headerName: 'Name'},
        {field: 'age', headerName: 'Age'},
        {field: 'email', headerName: 'Email'}
    ];

    const data = [
        {id: 1, name: 'John Doe', age: 25, email: 'john@example.com'},
        {id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com'}
        // ... More data ...
    ];

    const [selectedColor, setSelectedColor] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const handleColorChange = color => {
        setSelectedColor(color);
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="app">
            <h1>GridComponent Example</h1>
            <GridComponent columns={columns} data={data}/>
            <SRadioButton color="red"
                          selected={selectedColor === 'red'}
                          onClick={() => handleColorChange('red')}
                          text='Red'/>
            <SRadioButton color="blue"
                          selected={selectedColor === 'blue'}
                          onClick={() => handleColorChange('blue')}/>
            <SRadioButton color="green"
                          selected={selectedColor === 'green'}
                          onClick={() => handleColorChange('green')}/>
            <SCheckbox checked={isChecked}
                       onChange={handleCheckboxChange}
                       label="Check Me"/>
        </div>
    );
};

export default App;
