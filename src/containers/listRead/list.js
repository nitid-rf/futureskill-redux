import React, { Component } from 'react';
import {connect} from 'react-redux';

class List extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.book.title}</h2>
                <p>{this.props.book.startDate}</p>
                <p>{this.props.book.endDate}</p>
                <p>{this.props.book.author}</p>
                <p>{this.props.book.cover}</p>

                {/* <button>Edit</button> */}
                <button
                    OnClick={()=>this.props.dispatch
                        ({type:'DELETE_BOOK_READ',
                        id:this.props.book.id})}>
                    Delete
                </button>
            </div>
        );
    }
}

export default connect()(List);