import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
const { Content } = Layout

class Read extends Component {
  handleSubmit = event => {
    const title = this.getTitle.value
    const startDate = this.getStartDate.value
    const endDate = this.getEndDate.value
    const author = this.getAuthor.value
    const cover = this.getCover.value
    const description = this.getDescription.value
    const data = {
      id: new Date(),
      title,
      startDate,
      endDate,
      author,
      cover,
      description
    }
    this.props.dispatch({
      type: 'ADD_BOOK_READ',
      data
    })

    this.getTitle.value = ''
    this.getStartDate.value = ''
    this.getEndDate.value = ''
    this.getAuthor.value = ''
    this.getCover.value = ''
    this.getDescription.value = ''
  }

  render() {
    return (
      <Layout className="layout">
        <Content>
          <h1 className="header">บันทึกการอ่านหนังสือ</h1>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label for="fname">Title Book:</label>
              <br />
              <input
                required
                type="text"
                placeholder="input title book"
                ref={input => (this.getTitle = input)}
              />
              <br />
              <br />
              <label for="sdate">Start Date:</label>
              <br />
              <input
                required
                type="text"
                placeholder="input start date"
                ref={input => (this.getStartDate = input)}
              />
              <br />
              <br />
              <label for="edate">End Date:</label>
              <br />
              <input
                required
                type="text"
                placeholder="input end date"
                ref={input => (this.getEndDate = input)}
              />
              <br />
              <br />
              <label for="author">Author:</label>
              <br />
              <input
                required
                type="text"
                placeholder="input author"
                ref={input => (this.getAuthor = input)}
              />
              <br />
              <br />
              <label for="cover">Cover Url:</label>
              <br />
              <input
                required
                type="text"
                placeholder="input cover url"
                ref={input => (this.getCover = input)}
              />
              <br />
              <br />
              <label for="des">Description:</label>
              <br />
              <textarea
                required
                rows="3"
                cols="50"
                placeholder="input message"
                ref={input => (this.getDescription = input)}
              />
              <br />
              <br />
              <button>Submit</button>
            </form>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default connect()(Read)
