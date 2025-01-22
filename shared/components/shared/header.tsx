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
      <Container className="flex items-center justify-between py-4">
        <div className="flex gap-20">
          <a href="/" className="">
            <Logo color="#000" size={30} />
          </a>

          <div className="flex space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-xl text-gray-700 hover:text-gray-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {hasCart && <CartButton />}
      </Container>

      {/* Разделительная линия */}
      <div className="h-[1px] w-full rounded-lg bg-gray-200" />
    </header>
  )
}
