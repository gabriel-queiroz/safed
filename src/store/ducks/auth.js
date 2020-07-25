const initialState = {
  loading: true,
  token: '',
};

export const actions = {
  LOAD_TOKEN: 'auth/LOAD_TOKEN',
  CHANGE_LOADER: 'auth/CHANGE_LOADER',
};

export default function glassReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_TOKEN:
      return { ...state, token: action.payload, loading: false };
    case actions.CHANGE_LOADER:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
