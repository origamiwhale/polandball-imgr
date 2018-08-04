import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as imagesActions } from '../ducks/images.ducks'

import MainView from './Main.view'

const mapStateToProps = ({ images: { loaded, posts } }) => ({
  loaded,
  posts
})

const mapDispatchToProps = dispatch => ({
  imagesActions: bindActionCreators(imagesActions, dispatch)
})

class Main extends Component {
  componentDidMount () {
    const { imagesActions } = this.props
    imagesActions.initialize()
  }

  render () {
    const { loaded, posts } = this.props
    if (!loaded) {
      return null
    }
    return (
      <MainView posts={posts} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
