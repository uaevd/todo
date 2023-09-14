import { Meta, StoryObj } from '@storybook/react';

import { ToDoListPage } from '.';

export default {
    title: 'Pages/ToDoListPage',
    component: ToDoListPage,
} as Meta<typeof ToDoListPage>;

type Story = StoryObj<typeof ToDoListPage>;

export const Default: Story = {};
