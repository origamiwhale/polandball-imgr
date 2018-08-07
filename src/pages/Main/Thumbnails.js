import React, { Component } from 'react'
import Thumbnail from '../../components/Thumbnail'

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
            <Thumbnail key={p.id} url={p.post.images[0].link} />
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
