import React from 'react'

import './main.css'
import Thumbnails from './Main/Thumbnails'

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

export default Main
