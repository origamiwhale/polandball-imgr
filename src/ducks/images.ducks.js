import { search } from '../api'

const FETCH_START = 'polandball/images/FETCH_START'
const FETCH_DONE = 'polandball/images/FETCH_DONE'
const LOAD_POSTS = 'polandball/images/LOAD_POSTS'

const initialState = {
  loading: false,
  loaded: false,
  posts: []
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_DONE:
      return {
        ...state,
        loading: false,
        loaded: true
      }
    case LOAD_POSTS:
      return {
        ...state,
        ...{ posts: action.posts }
      }
    default: return state
  }
}

const fetchStart = () => ({
  type: FETCH_START
})

const fetchDone = () => ({
  type: FETCH_DONE
})

const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts: posts
})

export const actions = {
  initialize () {
    return dispatch => {
      dispatch(fetchStart())
      search()
        .then(data => {
          dispatch(loadPosts(
            data.items[0].items.filter(i => i.type === 'post' && i.post.images_count > 0)
          ))

          dispatch(fetchDone())
        })
    }
  }
}
