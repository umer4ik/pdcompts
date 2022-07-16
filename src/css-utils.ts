import clsx, { ClassValue } from 'clsx'
const prefix = 'pdcomp pdcomp-'

export function cls(...className: ClassValue[]) {
  const parsed = clsx(className)
  return parsed?.split(' ').map(x => `${prefix}${x}`).join(' ')
}
