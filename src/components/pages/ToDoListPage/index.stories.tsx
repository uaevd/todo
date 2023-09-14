import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { ToDoListPage } from '.';

export default {
    title: 'Pages/ToDoListPage',
    component: ToDoListPage,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as Meta<typeof ToDoListPage>;

type Story = StoryObj<typeof ToDoListPage>;

export const Default: Story = {};
