import React from 'react'

import './Thumbnail.css'

const ThumbnailView = ({ url }) => {
  return (
    <div className='thumbnail'>
      <img src={url} />
    </div>
  )
}

export default ThumbnailView
