import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { ToDoInputPage } from '.';

export default {
    title: 'Pages/ToDoInputPage',
    component: ToDoInputPage,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as Meta<typeof ToDoInputPage>;

type Story = StoryObj<typeof ToDoInputPage>;

export const Default: Story = {};
