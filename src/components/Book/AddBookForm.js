// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { bookAdded } from './BookSlice'
// import { Layout } from 'antd'
// const { Content } = Layout

// export const AddBookForm = () => {
//   const [id, setId] = useState('')
//   const [title, setTitle] = useState('')
//   const [startDate, setStartDate] = useState('')
//   const [endDate, setEndDate] = useState('')
//   const [author, setAuthor] = useState('')
//   const [cover, setCover] = useState('')
//   const [description, setDescription] = useState('')

//   const dispatch = useDispatch()

//   const onTitleChanged = e => setTitle(e.target.value)
//   const onStartDateChanged = e => setStartDate(e.target.value)
//   const onEndDateChanged = e => setEndDate(e.target.value)
//   const onAuthorChanged = e => setAuthor(e.target.value)
//   const onCoverChanged = e => setCover(e.target.value)
//   const onDescriptionChanged = e => setDescription(e.target.value)

//   const onSavePostClicked = () => {
//     if (title && 
//       startDate&&
//       endDate&&
//       author&&
//       cover&&
//       description) {
//       dispatch(bookAdded(id,title,
//         startDate,
//         endDate,
//         author,
//         cover,
//         description))
//       setId('')
//       setTitle('')
//       setStartDate('')
//       setEndDate('')
//       setAuthor('')
//       setCover('')
//       setDescription('')
//     }
//   }

//   const canSave =
//     Boolean(title) &&
//     Boolean(startDate) &&
//     Boolean(endDate) &&
//     Boolean(author) &&
//     Boolean(cover) &&
//     Boolean(description)

//   return (
//     <Layout className="layout">
//       <Content>
//         <h1 className="header">บันทึกการอ่านหนังสือ</h1>
//         <div className="container">
//           <form onSubmit={this.handleSubmit}>
//           <label for="fname">Id Book:</label>
//             <input
//               required
//               type="text"
//               placeholder="input title book"
//               value={id}
//             />

//             <label for="fname">Title Book:</label>
//             <input
//               required
//               type="text"
//               placeholder="input title book"
//               value={title}
//               onChange={onTitleChanged}
//             />

//             <label for="sdate">Start Date:</label>
//             <input
//               required
//               type="text"
//               placeholder="input start date"
//               value={startDate}
//               onChange={onStartDateChanged}
//             />

//             <label for="edate">End Date:</label>
//             <input
//               required
//               type="text"
//               placeholder="input end date"
//               value={endDate}
//               onChange={onEndDateChanged}
//             />

//             <label for="author">Author:</label>
//             <input
//               required
//               type="text"
//               placeholder="input author"
//               value={author}
//               onChange={onAuthorChanged}
//             />

//             <label for="cover">Cover Url:</label>
//             <input
//               required
//               type="text"
//               placeholder="input cover url"
//               value={cover}
//               onChange={onCoverChanged}
//             />

//             <label for="des">Description:</label>
//             <textarea
//               required
//               rows="3"
//               cols="50"
//               placeholder="input message"
//               value={description}
//               onChange={onDescriptionChanged}
//             />

//             <button onClick={onSavePostClicked} disabled={!canSave}>
//               Submit
//             </button>
//           </form>
//         </div>
//       </Content>
//     </Layout>
//   )
// }
