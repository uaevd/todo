import { Meta, StoryObj } from '@storybook/react';

import { ToDoItem } from '.';

export default {
    title: 'Organisms/ToDoItem',
    component: ToDoItem,
} as Meta<typeof ToDoItem>;

type Story = StoryObj<typeof ToDoItem>;

export const Default: Story = {
    args: {
        label: 'Study React.js',
    },
};
