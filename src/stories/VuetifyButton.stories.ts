import type { Meta, StoryObj } from '@storybook/vue3';

import MyVueButton from './VButton.vue';
import { withVuetifyTheme } from '../../.storybook/withVuetifyTheme.decorator'


const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/VuetifyButton',
  component: MyVueButton,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "large"], 
    },
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['autodocs'],
  decorators:[withVuetifyTheme]
} satisfies Meta<typeof MyVueButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Overview = {
  args: { size:'medium' },
  render: (args: any) => ({
    setup: () => {
      return { args }
    },
    template: ` <v-btn v-bind="args">Button</v-btn>`
  })
}



