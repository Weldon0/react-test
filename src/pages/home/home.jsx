import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList, deleteList } from '@/store/home/action';
import ListData from './list'

class Home extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    console.log(props)
    this.state = {
      msg: 'HOME',
      data: '',
      name: ''
    }
  }

  handleSave() {
    // this.props.saveFormData(this.state.data, 'num');
    this.props.addList(this.state.data)
    this.setState({
      name: ''
    })
    console.log(this.props)
  }

  handleFormdata(event) {
    console.log(event.target.value)
    this.setState({
      data: event.target.value
    })
  }

  handleChangeInput(event) {
    // console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleDeleteList(id) {
    this.props.deleteList(id)
  }
  
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
     <div>
        <input value={this.state.name} type="text" onBlur={this.handleFormdata.bind(this)} onChange={this.handleChangeInput.bind(this)}/>
        <button onClick={this.handleSave.bind(this)}>点击存储</button>
        <div style={{color: 'red', fontSize: '10px'}}>
        <ListData list={this.props.listData} handleDeleteList={this.handleDeleteList.bind(this)}></ListData>
          {/* {
            this.props.listData.map((v, i) => {
              return (
                <h1 onClick={this.handleDeleteList.bind(this, v.status)} key={v.status}>{v.status}-{v.name}</h1>
              )
            })
          } */}
        </div>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    // num: state.formData.num,
    listData: state.listData
    // val: 
  }
}

export default connect(mapStateToProps, {
  // saveFormData,
  deleteList,
  addList
})(Home);