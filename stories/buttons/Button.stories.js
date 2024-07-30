import Button from './SavedBtn.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

export default meta

export const ButtonLarge = {
  args: {
    text: '저장',
    onClick: () => {
      console.log('저장')
    },
    size: 'large'
  }
}

export const ButtonMedium = {
  args: {
    text: '저장',
    onClick: () => {
      console.log('저장')
    },
    size: 'large'
  }
}
