import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { InputToDo } from '.';
import { ToDoListContextProvider } from 'contexts/ToDoList';

export default {
    title: 'Organisms/InputToDo',
    component: InputToDo,
    decorators: [
        (Story) => (
            <ToDoListContextProvider>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </ToDoListContextProvider>
        ),
    ],
} as Meta<typeof InputToDo>;

type Story = StoryObj<typeof InputToDo>;

export const Default: Story = {};
