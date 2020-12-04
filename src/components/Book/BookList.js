// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// export const BookList = () => {
//   const books = useSelector((state) => state.books)

//   const renderedPosts = books.map((book) => {
//     return (
//       <article className="post-excerpt" key={book.id}>
//         <h3>{book.title}</h3>
//         <p className="post-content">{post.content.substring(0, 100)}</p>

//         <Link to={`/books/${book.id}`} className="button muted-button">
//           View Book
//         </Link>
//       </article>
//     )
//   })

//   return (
//     <section className="posts-list">
//       <h2>Book Save</h2>
//       {renderedPosts}
//     </section>
//   )
// }
