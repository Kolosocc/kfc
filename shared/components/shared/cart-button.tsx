'use client'

import { cn } from '@/shared/lib/utils'
import React from 'react'
import { Button } from '../ui'
import { ArrowRight, ShoppingCart } from 'lucide-react'
// import { CartDrawer } from './cart-drawer'
// import { useCartStore } from '@/shared/store'

interface Props {
  className?: string
}

export const CartButton: React.FC<Props> = ({ className }) => {
  // const [totalAmount, items, loading] = useCartStore((state) => [
  //   state.totalAmount,
  //   state.items,
  //   state.loading,
  // ])

  const [totalAmount, items, loading] = [10, [1, 2, 3], false]

  return (
    <div>
      <Button
        loading={loading}
        className={cn(
          'group relative h-12 w-[120px]',
          { 'w-[120px]': loading },
          className
        )}
      >
        <b>{totalAmount} ₽</b>
        <span className="mx-3 h-full w-[1px] bg-white/30" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>{items.length}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
      </Button>
    </div>
  )
}
