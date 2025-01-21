import React from 'react'
import { cn } from '@/shared/lib/utils'
import { Logo } from '@/shared/components/ui/logo'
import { Container } from './container'
import { CartButton } from './cart-button'
import Link from 'next/link'

interface Props {
  hasSearch?: boolean
  hasCart?: boolean
  className?: string
}

const menuItems = [
  { name: 'Меню', href: '/' },
  { name: 'Купоны', href: '/coupons' },
  { name: 'Акции', href: '/promo' },
  { name: 'Рестораны', href: '/restaurants' },
]

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  return (
    <header className={cn('', className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
          <a href="/" className="">
            <Logo color="#000" size={40} />
          </a>
        </div>

        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg hover:text-gray-400"
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {hasCart && <CartButton />}
      </Container>
    </header>
  )
}
