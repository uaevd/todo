import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { InputToDo } from '.';

export default {
    title: 'Organisms/InputToDo',
    component: InputToDo,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as Meta<typeof InputToDo>;

type Story = StoryObj<typeof InputToDo>;

export const Default: Story = {};
