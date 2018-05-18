import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFormData } from '@/store/home/action';

class Home extends Component {
  constructor(props) {
    // console.log(props)
    super(props)
    console.log(props)
    this.state = {
      msg: 'HOME',
      data: ''
    }
  }

  handleSave() {
    this.props.saveFormData(this.state.data, 'num')
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
  }
  
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
     <div>
        <h1 style={{color: 'red', fontSize: '10px'}}>
          { this.props.num }
        </h1>
        <input type="text" onBlur={this.handleFormdata.bind(this)} onChange={this.handleChangeInput.bind(this)}/>
        <button onClick={this.handleSave.bind(this)}>点击存储</button>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    num: state.formData.num
  }
}

export default connect(mapStateToProps, { saveFormData })(Home);