import { BrowserRouter } from 'react-router-dom';
import { ToDoListContextProvider } from 'contexts/ToDoList';
import { Meta, StoryObj } from '@storybook/react';

import { ToDoListPage } from '.';

export default {
    title: 'Pages/ToDoListPage',
    component: ToDoListPage,
    decorators: [
        (Story) => (
            <ToDoListContextProvider>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </ToDoListContextProvider>
        ),
    ],
} as Meta<typeof ToDoListPage>;

type Story = StoryObj<typeof ToDoListPage>;

export const Default: Story = {};
