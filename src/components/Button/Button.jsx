import React from 'react'
import styles from './Button.module.css'

const Button = ({variant = "primary"}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`
  return (
    <>
      <button className={buttonClass}>Click</button>
    </>
  )
}

export default Button