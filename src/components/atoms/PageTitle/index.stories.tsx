import { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from '.';

export default {
    title: 'Atoms/PageTitle',
    component: PageTitle,
} as Meta<typeof PageTitle>;

type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
    args: {
        title: 'To-Do List',
    },
};
