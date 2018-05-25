import React, { Component } from 'react';

class ListData extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div>
        {
          this.props.list.map((v) => {
            return (
              <h1 onClick={this.props.handleDeleteList(v.status)} key={v.status}>{v.status}-{v.name}</h1>
            )
          })
        }
      </div>
    )
  }
}

export default ListData;