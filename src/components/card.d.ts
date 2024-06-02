import { HTMLProps } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  restProps?: HTMLProps<HTMLDivElement>
  type?: 'main' | 'mobile'
}

export type { CardProps }
