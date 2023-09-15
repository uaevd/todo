import { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from '.';

export default {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
} as Meta<typeof NotFoundPage>;

type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {};
