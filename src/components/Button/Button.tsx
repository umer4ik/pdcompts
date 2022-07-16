import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, HTMLProps } from 'react'
import { cls } from '../../css-utils'
import './Button.css'

const elementsMap = new Map([
  ['a', AEl],
  ['span', SpanEl],
  ['div', DivEl],
  ['button', ButtonEl]
])

type ButtonProps = {
  children: React.ReactNode,
  primary?: boolean,
  outline?: boolean,
  tag?: 'a' | 'button' | 'span' | 'div'
}
export function Button({ children, primary = false, tag = 'button', outline = false, ...rest }: ButtonProps) {
  const Tag = elementsMap.get(tag) as OneOfElements
  return <Tag className={cls('button', primary && 'button--primary', outline && 'button--outline')} {...rest}>{children}</Tag>
}

type AElProps = {
  children: React.ReactNode,
} & React.ComponentProps<'a'>

function AEl({ children, ...rest }: AElProps) {
  return <a {...rest}>{children}</a>
}

type ButtonElProps = {
  children: React.ReactNode,
} & React.ComponentProps<'button'>

function ButtonEl({ children, ...rest }: ButtonElProps) {
  return <button {...rest}>{children}</button>
}

type SpanElProps = {
  children: React.ReactNode,
} & React.ComponentProps<'span'>

function SpanEl({ children, ...rest }: SpanElProps) {
  return <span {...rest}>{children}</span>
}

type DivElProps = {
  children: React.ReactNode,
} & React.ComponentProps<'div'>

function DivEl({ children, ...rest }: DivElProps) {
  return <div {...rest}>{children}</div>
}

type OneOfElements = typeof ButtonEl | typeof DivEl | typeof SpanEl | typeof AEl
