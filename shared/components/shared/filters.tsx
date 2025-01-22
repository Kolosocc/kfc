'use client'

import React from 'react'
import { Title } from './title'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { useQueryFilters, useFilters } from '@/shared/hooks'

interface Ingredient {
  id: number
  name: string
}

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  // Пример ингредиентов для фильтра
  const ingredients: Ingredient[] = [
    { id: 1, name: 'Куриная котлета' },
    { id: 2, name: 'Крылышки' },
    { id: 3, name: 'Картошка фри' },
    { id: 4, name: 'Напиток' },
    { id: 5, name: 'Соус' },
    { id: 6, name: 'Сыр' },
    { id: 7, name: 'Булочка' },
    { id: 8, name: 'Лук' },
    { id: 9, name: 'Салат' },
    { id: 10, name: 'Помидоры' },
  ]

  const filters = useFilters()

  useQueryFilters(filters)

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }))

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0])
    filters.setPrices('priceTo', prices[1])
  }

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-300 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      {/* Фильтр по ингредиентам */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6} // Лимит отображаемых ингредиентов
        defaultItems={items.slice(0, 6)} // По умолчанию первые 6
        items={items} // Полный список ингредиентов
        loading={false} // Если данные статические, убираем загрузку
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  )
}
