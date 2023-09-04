
# STable Component

The `STable` component is a versatile and customizable table view component that allows you to display tabular data in your web application. It provides features such as sorting, selection, and the ability to switch between table and list views.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)

## Installation

To use the `STable` component in your React application, you can follow these steps:

1. Install the component package (not yet published to npm):

   ```
   npm install s-table
   ```

2. Import the `Table` component into your application:

   ```javascript
   import Table from 's-table';
   ```

## Usage

The `STable` component can be used to render tabular data with various configurations. You can customize the table headers, data, sorting behavior, selection modes, and more.

```javascript
import React from 'react';
import STable from 's-table';

function MyTable() {
  // Define the table headers
  const headers =[
      {label: 'Operator', sortable: true, sortDirection: 'default'},
      {label: 'Headset Display', sortable: true, sortDirection: 'default'},
      {label: '3G Availability', sortable: false, sortDirection: 'default'}
  ];

  // Define the table data (rows)
  const data = [
      {id: 1, data: ['Celcom Axiata (LTE)', 'CELCOM / MY Celcom / 502 19', 'Yes'], selected: false},
      {id: 2, data: ['Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false},
      {id: 3, data: ['U Mobile (LTE)', 'DiGi 1800 / DiGi / MYMY18', 'Yes'], selected: false},
      {id: 4, data: ['DiGi Telecom (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false}
  ];

  return (
    <STable
      headers={headers}
      rows={data}
      mobileView={false}
      title="My Table"
      selectType="multiple"
      color="#4A148C"
      theme="dark"
    />
  );
}

export default MyTable;
```

## Props

The `STable` component accepts the following props:

- `headers` (Array): An array of objects representing table headers. Each object should have a `label` (string) for the header label, `sortable` (boolean) to enable sorting, and `sortDirection` (string) to set the initial sorting direction (`'asc'`, `'desc'`, or `'default'`).

- `rows` (Array): An array of data rows for the table. Each row should be an object with an `id` (unique identifier) and a `data` property containing an array of data cells.

- `mobileView` (boolean): Indicates whether the table should be displayed in mobile view. Set to `true` for mobile view, `false` for desktop view.

- `title` (string, optional): The title of the table, displayed at the top of the component.

- `selectType` (string, optional): Type of selection for the table. Options include `'single'`, `'multiple'`, or `undefined` for no selection.

- `color` (string, optional): The color code or name for the table's selection controls (checkboxes or radio buttons).

- `theme` (string, optional): The theme of the table. Set to `'dark'` for a dark theme; otherwise, it defaults to a light theme.

## Example

In the example above, we demonstrated how to use the `Table` component to display a table with custom headers and data. You can customize it further by adjusting the props to fit your specific use case.

Feel free to explore the various features and configurations available with the `Table` component to create interactive and informative tables in your React application.

---