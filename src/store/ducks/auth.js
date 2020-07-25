const initialState = {
  loading: true,
  token: '',
  user: {},
};

export const actions = {
  LOAD_TOKEN: 'auth/LOAD_TOKEN',
  CHANGE_LOADER: 'auth/CHANGE_LOADER',
  LOADER_USER: 'auth/LOADER_USER',
};

export default function glassReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_TOKEN:
      return { ...state, token: action.payload, loading: false };
    case actions.CHANGE_LOADER:
      return { ...state, loading: action.payload };
    case actions.LOADER_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
