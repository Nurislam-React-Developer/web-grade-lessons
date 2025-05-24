import React from 'react'
import { Button, DangerButton } from '../components/Button.jsx/Button.styled'

const HomePage = ({size}) => {
  return (
    <div>
      <Button $size="small">
       Маленкий кнопка
      </Button>
      <Button $size="medium">
        средний кнопка
      </Button>
      <Button $size="large">
        Большой кнопка
      </Button>
      <Button>Norm Button</Button>
      <Button $primary={true}>Primary button</Button>
      <Button disabled>Disabled button</Button>
      <DangerButton>Error</DangerButton>
      <DangerButton as='a'>Error</DangerButton>
      <DangerButton as='div'>Error</DangerButton>
    </div>
  )
}

export default HomePage