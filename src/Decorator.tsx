import React from 'react'
import { cls } from './css-utils'
import './Decorator.css'

type DecoratorProps = {
  children: React.ReactNode
}

export function Decorator({ children }: DecoratorProps) {
  return <div className={cls('decorator')}>{children}</div>
}