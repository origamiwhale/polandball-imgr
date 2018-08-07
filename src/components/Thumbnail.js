import React from 'react'
import PropTypes from 'prop-types'
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

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired
}

export default Thumbnail
