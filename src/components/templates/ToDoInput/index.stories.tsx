import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { ToDoInput } from '.';

export default {
    title: 'Templates/ToDoInput',
    component: ToDoInput,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as Meta<typeof ToDoInput>;

type Story = StoryObj<typeof ToDoInput>;

export const Default: Story = {};
