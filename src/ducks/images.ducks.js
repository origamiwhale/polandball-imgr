import { search } from '../api'

const FETCH_START = 'polandball/images/FETCH_START'
const FETCH_DONE = 'polandball/images/FETCH_DONE'

const initialState = {
  loading: false,
  loaded: false,
  error: false
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
        loading: false
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

export const actions = {
  initialize () {
    return dispatch => {
      dispatch(fetchStart())
      search()
        .then(data => {
          console.log(data)
          dispatch(fetchDone())
        })
    }
  }
}
