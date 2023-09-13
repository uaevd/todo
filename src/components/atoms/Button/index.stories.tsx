import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

export default {
    title: 'Atoms/Button',
    component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const RedButton: Story = {
    args: {
        label: 'Delete',
    },
};
export const BlueButton: Story = {
    args: {
        label: 'Add',
        color: '#304ffe',
    },
};
