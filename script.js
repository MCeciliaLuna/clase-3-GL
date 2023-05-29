const books = [
  { title: 'El Aleph', author: 'Jorge Luis Borges' },
  { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
  { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { title: 'Rayuela', author: 'Julio Cortázar' },
  { title: 'Ficciones', author: 'Jorge Luis Borges' },
  { title: 'El hacedor', author: 'Jorge Luis Borges' },
  { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
  { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
  { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
  { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
  { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
  { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
  { title: 'Bestiario', author: 'Julio Cortázar' },
  { title: 'Las armas secretas', author: 'Julio Cortázar' }
];

console.table(books)

let searchAuthor = 'Gabriel García Márquez'
console.log(`\nLibros del autor "${searchAuthor}":`)

const filterBooksByAuthor = (books, searchAuthor) => {
  const authorFilter = books.filter((books) => books.author === searchAuthor)

  const authorFilteredBooks = authorFilter.map((book) => book.title)
  const inventedAuthor = 'Cecilia'
  const authorChanged = authorFilteredBooks.map((title) => {
    return {title, author: inventedAuthor}
  })

  console.table(authorFilteredBooks)
  console.log(`\nAutor cambiado por "${inventedAuthor}":`)
  console.table(authorChanged)
}

filterBooksByAuthor(books, searchAuthor)

console.log(`\nEl array original NO HA SIDO MODIFICADO`)
console.table(books)

