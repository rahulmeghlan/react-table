# SList Component

The `SList` component is a flexible list view component that allows you to display data in a customizable list format. It supports various selection modes, themes, and provides options for rendering headers and body content.

## Props

### headers (Array)

An array of header objects that define the column headers for the list. Each header object should have the following properties:

- `label` (string): The label to display for the header.
- `sortable` (boolean): Whether the column is sortable.
- `sortDirection` (string): The initial sorting direction (`'asc'`, `'desc'`, `'default'`).

### data (Array)

An array of data objects representing the rows of the list. Each data object should have an `id` and a `data` property. The `data` property is an array containing the row's content for each column.

### title (string, optional)

The title of the list, displayed at the top of the component.

### theme (string, optional)

The theme of the list. Can be set to `'light'` or `'dark'`. The default is `'light'`.

### selectType (string, optional)

The selection type for the list. Can be set to `'single'`, `'multiple'`, or left undefined for no selection. The default is undefined.

### color (string, optional)

The color theme for the list's selection controls (checkboxes or radio buttons). You can specify a color code or name.

## Usage

### Single Select List

```jsx
<SList
  headers={[
    { label: 'Name', sortable: true, sortDirection: 'default' },
    { label: 'Age', sortable: true, sortDirection: 'default' },
  ]}
  data={[
    { id: 1, data: ['John', '25'] },
    { id: 2, data: ['Alice', '30'] },
  ]}
  title="Single Select List"
  selectType="single"
  color="#4A148C"
  theme="light"
/>
```

### Multiple Select List

```jsx
<SList
  headers={[
    { label: 'Name', sortable: true, sortDirection: 'default' },
    { label: 'Age', sortable: true, sortDirection: 'default' },
  ]}
  data={[
    { id: 1, data: ['John', '25'] },
    { id: 2, data: ['Alice', '30'] },
  ]}
  title="Multiple Select List"
  selectType="multiple"
  color="#4A148C"
  theme="light"
/>
```

### Basic List

```jsx
<SList
  headers={[
    { label: 'Name', sortable: true, sortDirection: 'default' },
    { label: 'Age', sortable: true, sortDirection: 'default' },
  ]}
  data={[
    { id: 1, data: ['John', '25'] },
    { id: 2, data: ['Alice', '30'] },
  ]}
  title="Basic List"
  theme="light"
/>
```

## Features

- **Customizable Headers**: You can define custom headers for the list, specifying their labels and whether they are sortable.

- **Selection Modes**: The list supports three selection modes: single select, multiple select, and no selection.

- **Themes**: You can choose between light and dark themes for the list.

- **Sorting**: Columns can be sorted by clicking on the headers with sorting enabled.

- **Responsive**: The component is responsive and can be used on both desktop and mobile devices.

- **Selection Controls**: In multiple select mode, the list provides checkboxes or radio buttons for selecting items.
