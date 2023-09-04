import {render, screen, fireEvent} from '@testing-library/react';
import STable from './STable';

// Define mock data for testing
const headers = [
    {label: 'Operator', sortable: true, sortDirection: 'default'},
    {label: 'Headset Display', sortable: true, sortDirection: 'default'},
    {label: '3G Availability', sortable: false, sortDirection: 'default'}
];

const rows = [
    {id: 1, data: ['Celcom Axiata (LTE)', 'CELCOM / MY Celcom / 502 19', 'Yes'], selected: false},
    {id: 2, data: ['Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false},
    {id: 3, data: ['U Mobile (LTE)', 'DiGi 1800 / DiGi / MYMY18', 'Yes'], selected: false},
    {id: 4, data: ['DiGi Telecom (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false}
];

// Test case 1: Render the Table component
test('renders Table component', () => {
    render(
        <STable
            headers={headers}
            rows={rows}
            mobileView={false}
            title="Test Table"
            selectType="multiple"
            color="blue"
            theme="dark"
        />
    );
});

// Test case 2: Test sorting functionality
test('handles sorting of table data', () => {
    render(
        <STable
            headers={headers}
            rows={rows}
            mobileView={false}
            title="Test Table"
            selectType="multiple"
            color="blue"
            theme="dark"
        />
    );

    // Simulate a click on the 'Name' header to sort by name
    const nameHeader = screen.getByText('Operator');
    const items = screen.getByText('Celcom Axiata (LTE)').closest('.table-body').querySelectorAll('.table-body-row');

    // verify ascending order
    fireEvent.click(nameHeader);
    expect(items[0]).toHaveTextContent('Celcom Axiata (LTE)');

    // verify descending order
    fireEvent.click(nameHeader);
    expect(items[0]).toHaveTextContent('U Mobile (LTE)');

    // verify default order
    fireEvent.click(nameHeader);
    expect(items[1]).toHaveTextContent('Maxis (LTE)');
});
