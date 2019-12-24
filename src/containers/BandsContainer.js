import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  addBand = (band) => {
    console.log(band)
   this.props.dispatch({type:"ADD_BAND",band: band})
  }
  display_bands = () => {
    return this.props.bands.map(e => <li>{e.name}</li>)
  }
  render() {
    return(
      <div>
        <ul>
          {this.display_bands()}
        </ul>
        <BandInput addBand = {this.addBand}/>
      </div>
    )
  }
}

export default connect(state => {return{bands: state.bands}})(BandsContainer)
