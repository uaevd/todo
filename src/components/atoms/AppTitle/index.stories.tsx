import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';

export default {
    title: 'Atoms/AppTitle',
    component: AppTitle,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    parameters: {
        backgrounds: {
            default: 'Header background color',
            values: [{ name: 'Header background color', value: '#304ffe' }],
        },
    },
} as Meta<typeof AppTitle>;

type Story = StoryObj<typeof AppTitle>;

export const Default: Story = {};
