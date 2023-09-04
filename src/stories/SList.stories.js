import SList from "../components/SList";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Singtel/SList',
    component: SList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        selectType: {
            control: 'select',
            options: ['single', 'multiple', undefined]
        },
        theme: {
            control: 'select', options: ['dark', 'light']
        }
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const List = {
    args: {
        headers: [
            {label: 'Operator', sortable: true},
            {label: 'Headset Display', sortable: true},
            {label: '3G Availability', sortable: true}
        ],
        data: [
            {id: 1, data: ['*Celcom Axiata (LTE)', 'CELCOM / MY Celcom / 502 19', 'Yes'], selected: false},
            {id: 2, data: ['*DiGi Telecom (LTE)', 'DiGi 1800 / DiGi / MYMY18', 'Yes'], selected: false},
            {id: 3, data: ['*Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false},
            {id: 4, data: ['*U Mobile (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'], selected: false}
        ],
        onSortChange: () => {
        },
        title: 'SList Title',
        theme: 'dark',
        color: "#4A148C",
        selectType: 'single'
    },
};



