const errorReducer = (state = '', action) => {
  switch(action.type) {
    case 'ERRORED' :
      return action.error
    default :
      return state 
  }
}

export default errorReducer