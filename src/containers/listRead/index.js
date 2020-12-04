import React, { Component } from 'react'

import { connect } from 'react-redux'
// import List from './list'
import { Layout } from 'antd'
const { Content } = Layout

class ShowListBook extends Component {
  render() {
    return (
      <Layout className="layout">
        <Content>
          <h1 className="header">รายการหนังสือที่อ่านแล้ว</h1>
          {/* {this.props.books.map((book) =>
                <List key={book.id}
                book={book} /> )} */}
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state
  }
}

export default connect(mapStateToProps)(ShowListBook)
