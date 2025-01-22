import Link from 'next/link'
import React from 'react'
import { Title } from './title'
import { Button } from '../ui'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/shared/lib/utils'
// import { Ingredient } from '@prisma/client';

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
  className?: string
}

interface Ingredient {
  id: number
  name: string
  allergenInfo?: string
  calories?: number
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex justify-center rounded-2xl bg-white p-4 drop-shadow-lg duration-300 hover:drop-shadow-2xl',
        className
      )}
    >
      <Link href={`/product/${id}`}>
        <div className="relative h-[260px] w-[260px] overflow-hidden rounded-l">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill" // Растягивает изображение, чтобы заполнить контейнер
            objectFit="contain" // Подстраивает размер изображения, сохраняя пропорции
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant={'default'} className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}
