import React, { Component } from 'react'
import ThumbnailView from '../../components/Thumbnail.view'

class Thumbnails extends Component {
  state = {
    limit: 10
  }

  incrementLimit = () => {
    const { limit } = this.state
    this.setState({ limit: limit + 10 })
  }

  render () {
    const { posts } = this.props
    const { limit } = this.state
    return (
      <div id='thumbnails' >
        {
          posts.slice(0, limit).map(p =>
            <ThumbnailView url={p.post.images[0].link} />
          )
        }
        {
          limit < posts.length
            ? <button onClick={this.incrementLimit}>Load more</button>
            : <p>No more content!</p>
        }
      </div>
    )
  }
}

export default Thumbnails
