//Step1 Basics of Props
import React from 'react'

interface ButtonProps {
    label: string;
}

const Button1:React.FC<ButtonProps> = ({ label }) => {
  return (
    <>
    <button>{label}</button>
    </>
  )
}

export default Button1