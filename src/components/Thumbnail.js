import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import ReactLoading from 'react-loading'

import './Thumbnail.css'

const Thumbnail = ({ url }) => {
  return (
    <div className='thumbnail'>
      <ProgressiveImage src={url} placeholder=''>
        {
          (src, loading) => (
            loading
              ? <ReactLoading type='spin' color='white' />
              : <img src={url} />
          )
        }
      </ProgressiveImage>
    </div>
  )
}

export default Thumbnail
