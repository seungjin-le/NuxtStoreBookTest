// DefaultBtn.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultBtn from '~/components/buttons/DefaultBtn.vue'

const meta = {
  title: 'Components/DefaultBtn',
  component: DefaultBtn,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof DefaultBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: '버튼',
    onClick: () => console.log('clicked')
  }
}

export const NoText: Story = {
  args: {
    text: '',
    onClick: () => console.log('clicked')
  }
}
