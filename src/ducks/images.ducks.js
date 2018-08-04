const FETCH_START = 'polandball/images/FETCH_START'
const FETCH_DONE = 'polandball/images/FETCH_DONE'
const FETCH_ERROR = 'polandball/images/FETCH_ERROR'

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
    default: return state
  }
}

const fetchStart = () => ({
  type: FETCH_START
})

export const actions = {
  fetchStart: dispatch => dispatch(fetchStart())
}
