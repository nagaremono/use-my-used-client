export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};
