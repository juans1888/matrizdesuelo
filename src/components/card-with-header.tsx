import type { CardWithHeaderProps } from './card-with-header.d'

import type { ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className='block p-2 bg-white w-fit rounded-t-lg border border-gray-200 border-b-0'>
      {children}
    </div>
  )
}

function CardWithHeader({
  children,
  classNameContainer = '',
  classNameChildren = '',
  header = <></>,
  ...restProps
}: CardWithHeaderProps) {
  return (
    <div
      className={`max-w-6xl min-w-[320px] ${classNameContainer}`}
      {...restProps}
    >
      <Header>{header}</Header>
      <div
        className={`block p-4 bg-white rounded-b-lg rounded-tr-lg border border-gray-200 shadow-md ${classNameChildren}`}
      >
        {children}
      </div>
    </div>
  )
}

export default CardWithHeader
