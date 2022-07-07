import React from 'react'
import { BookCard, NavbarBook } from '../../components/modules'

const data = [
  { id: 1, src: "/images/book1.jpg", title: "The Tokyoiter", duration: '20 hours' },
  { id: 2, src: "/images/book2.jpg", title: "The Metamorphosis", duration: '5 hours' },
  { id: 3, src: "/images/book3.jpg", title: "The Tokyoiter", duration: '20 hours' },
  { id: 4, src: "/images/book4.jpg", title: "The Tokyoiter", duration: '20 hours' },
  { id: 6, src: "/images/book5.jpg", title: "The Tokyoiter", duration: '20 hours' },
]

export default function BrowseBook() {
  const books = data.map((book) =>
    <BookCard key={book.id} title={book.title} src={book.src} duration={book.duration} />
  )
  
  return (
    <div className='pt-14'>
      <p className='text-4xl font-bold pb-9'>Browse Book</p>
      <NavbarBook />
      <div className='flex flex-row gap-7'>
        {books}
      </div>
    </div>
  )
}
