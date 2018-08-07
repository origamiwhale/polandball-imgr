import React from 'react'
import PropTypes from 'prop-types'
import Thumbnails from './Thumbnails'

import './main.css'

const Main = ({ posts }) => {
  return (
    <div id='main'>
      Main
      {
        <Thumbnails posts={posts} />
      }
    </div>
  )
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Main
