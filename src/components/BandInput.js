// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state ={name: ""}
  }

  handleChange=(event)=>{
    this.setState({name: event.target.value})
  }
  handleSubmit=(event)=>{
    this.props.addBand(this.state)
    event.preventDefault()
    
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.name}/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
