import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

export default {
    title: 'Organisms/Header',
    component: Header,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
