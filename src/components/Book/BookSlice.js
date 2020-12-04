import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    startDate: '',
    endDate: '',
    author: '',
    cover: '',
    description: ''
  },
  {
    id: '2',
    title: 'Second Post',
    startDate: '',
    endDate: '',
    author: '',
    cover: '',
    description: ''
  },
]

const bookSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    bookAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(id, title, startDate,
        endDate,
        author,
        cover,
        description) {
        return {
          payload: {
            id,
            title,
            startDate,
            endDate,
            author,
            cover,
            description
          },
        }
      },
    },
    bookUpdated(state, action) {
      const { id, title,
        startDate,
        endDate,
        author,
        cover,
        description } = action.payload
      const existingPost = state.find((book) => book.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.startDate = startDate
        existingPost.endDate = endDate
        existingPost.author = author
        existingPost.cover = cover
        existingPost.description = description
      }
    },
  },
})

export const { bookAdded, bookUpdated } = bookSlice.actions

export default bookSlice.reducer