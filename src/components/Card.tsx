//step1 Passing Children and Complex Data
import React from 'react'

interface CardProps {
    children: React.ReactNode;
}

const Card:React.FC<CardProps> = ({ children }) => {
  return (
    <>
    <div className='card'>{children}</div>
    </>
  )
}

export default Card