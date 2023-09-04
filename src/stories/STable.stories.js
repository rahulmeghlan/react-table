import STable from "../components/STable";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Singtel/STable',
    component: STable,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const Table = {
    args: {
        headers: [
            {label: 'Operator', sortable: true},
            {label: 'Headset Display', sortable: true},
            {label: '3G Availability', sortable: true}
        ],
        rows: [
            {id: 1, data: ['*Celcom Axiata (LTE)', 'CELCOM / MY Celcom / 502 19', 'Yes'], selected: false},
            {id: 2, data: ['*DiGi Telecom (LTE)', 'DiGi 1800 / DiGi / MYMY18', 'Yes'], selected: false},
            {id: 3, data: ['*Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false},
            {id: 4, data: ['*U Mobile (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false}
        ],
        title: 'SList',
        mobileView: true,
        selectType: 'single',
        color: "#4A148C",
        theme: 'light'
    },
};



