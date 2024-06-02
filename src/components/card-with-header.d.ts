import type { HTMLProps, ReactNode } from 'react'

interface CardWithHeaderProps {
  children: ReactNode
  divChildrenClass?: string
  classNameContainer?: string
  classNameChildren?: string
  header?: ReactNode
  onClick?: () => void
  restProps?: HTMLProps<HTMLDivElement>
}

export type { CardWithHeaderProps }
