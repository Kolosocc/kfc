'use client'

import React from 'react'
import { useIntersection } from 'react-use'

import { Title } from './title'
import { cn } from '@/shared/lib/utils'

import { useCategoryStore } from '@/shared/store'
import { ProductCard } from './product-card'
// import { ProductWithRelations } from '@/@types/prisma'

interface ProductWithRelations {
  id: number
  name: string
  imageUrl: string
  items: { price: number }[]
  ingredients: { id: number; name: string }[] // Пример структуры ингредиентов
}

interface Props {
  title: string
  items: ProductWithRelations[]
  categoryId: number
  className?: string
  listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef<HTMLDivElement | null>(null)
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLDivElement>,
    {
      threshold: 0.4,
    }
  )

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  )
}
