import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/shared/components'
import { Suspense } from 'react'

export default function Home() {
  const categories = [
    {
      id: 1,
      name: 'Новинки',
      products: [
        {
          id: 101,
          name: 'Новинка 1',
          price: 150,
          imageUrl: '/images/product1.png',
          items: [{ price: 150 }],
          ingredients: [
            { id: 1, name: 'Курица' },
            { id: 2, name: 'Булочка' },
            { id: 3, name: 'Соус' },
          ],
        },
        {
          id: 1010,
          name: 'Новинка 1',
          price: 150,
          imageUrl: '/images/product1.png',
          items: [{ price: 150 }],
          ingredients: [
            { id: 1, name: 'Курица' },
            { id: 2, name: 'Булочка' },
            { id: 3, name: 'Соус' },
          ],
        },
        {
          id: 1011,
          name: 'Новинка 1',
          price: 150,
          imageUrl: '/images/product1.png',
          items: [{ price: 150 }],
          ingredients: [
            { id: 1, name: 'Курица' },
            { id: 2, name: 'Булочка' },
            { id: 3, name: 'Соус' },
          ],
        },
        {
          id: 1012,
          name: 'Новинка 1',
          price: 150,
          imageUrl: '/images/product1.png',
          items: [{ price: 150 }],
          ingredients: [
            { id: 1, name: 'Курица' },
            { id: 2, name: 'Булочка' },
            { id: 3, name: 'Соус' },
          ],
        },
        {
          id: 1013,
          name: 'Новинка 1',
          price: 150,
          imageUrl: '/images/product1.png',
          items: [{ price: 150 }],
          ingredients: [
            { id: 1, name: 'Курица' },
            { id: 2, name: 'Булочка' },
            { id: 3, name: 'Соус' },
          ],
        },
        {
          id: 102,
          name: 'Новинка 2',
          price: 200,
          imageUrl: '/images/product2.png',
          items: [{ price: 200 }],
          ingredients: [
            { id: 4, name: 'Сыр' },
            { id: 5, name: 'Говядина' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Детское меню',
      products: [
        {
          id: 201,
          name: 'Детское блюдо 1',
          price: 100,
          imageUrl: '/images/product3.png',
          items: [{ price: 100 }],
          ingredients: [
            { id: 6, name: 'Картофель' },
            { id: 7, name: 'Куриное филе' },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Комбо и Ланчи',
      products: [
        {
          id: 301,
          name: 'Комбо обед',
          price: 300,
          imageUrl: '/images/product4.png',
          items: [{ price: 300 }],
          ingredients: [
            { id: 8, name: 'Картофель фри' },
            { id: 9, name: 'Напиток' },
            { id: 10, name: 'Бургер' },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Картофель и Снэки',
      products: [
        {
          id: 401,
          name: 'Картошка фри',
          price: 120,
          imageUrl: '/images/product5.png',
          items: [{ price: 120 }],
          ingredients: [{ id: 11, name: 'Картофель' }],
        },
        {
          id: 402,
          name: 'Пирожок с вишней',
          price: 80,
          imageUrl: '/images/product6.png',
          items: [{ price: 80 }],
          ingredients: [
            { id: 12, name: 'Тесто' },
            { id: 13, name: 'Вишня' },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Десерты',
      products: [],
    },
    {
      id: 6,
      name: 'Мороженое и Милкшейки',
      products: [
        {
          id: 601,
          name: 'Мороженое',
          price: 70,
          imageUrl: '/images/product7.png',
          items: [{ price: 70 }],
          ingredients: [
            { id: 14, name: 'Молоко' },
            { id: 15, name: 'Сахар' },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'Выгодные хиты',
      products: [
        {
          id: 701,
          name: 'Хит-блюдо',
          price: 250,
          imageUrl: '/images/product8.png',
          items: [{ price: 250 }],
          ingredients: [
            { id: 16, name: 'Курица' },
            { id: 17, name: 'Соус' },
          ],
        },
      ],
    },
  ]

  return (
    <>
      <Container>
        <Title text="Меню" size={'lg'} className="ml-4 mt-6 font-extrabold" />
      </Container>
      <TopBar
        categories={[
          { id: 1, name: 'Новинки' },
          { id: 2, name: 'Детское меню' },
          { id: 3, name: 'Комбо и Ланчи' },
          { id: 4, name: 'Картофель и Снэки' },
          { id: 5, name: 'Десерты' },
          { id: 6, name: 'Мороженое и Милкшейки' },
          { id: 7, name: 'Выгодные хиты' },
        ]}
      />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
