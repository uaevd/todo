import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { ToDoList } from '.';

export default {
    title: 'Templates/ToDoList',
    component: ToDoList,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as Meta<typeof ToDoList>;

type Story = StoryObj<typeof ToDoList>;

export const Default: Story = {};
