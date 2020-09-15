const errorReducer = (state = '', action) => {
  switch(action.type) {
    case 'ERRORED' :
      return action.error
    case 'RESET_ERROR' :
      return action.error
    default :
      return state 
  }
}

export default errorReducer