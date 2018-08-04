import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as imagesActions } from '../ducks/images.ducks'

import MainView from './Main.view'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  imagesActions: bindActionCreators(imagesActions, dispatch)
})

class Main extends Component {
  componentDidMount () {
    const { imagesActions } = this.props
    imagesActions.initialize()
  }

  render () {
    return (
      <MainView />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
