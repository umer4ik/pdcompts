import * as React from 'react'
import { cls } from '../../css-utils'
import './Button.css'

type ButtonProps = {
  label: React.ReactNode
}
export function Button({ label }: ButtonProps) {
  return <button className={cls('button')}>{label}</button>
}