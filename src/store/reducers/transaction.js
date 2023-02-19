const initialState = {
    count: 0,
  };
  
  const transaction = (state = initialState, action) => {
    switch (action.type) {
      case 'SETCOUNT':
        return {
          count:action.payload.count,
        };
      default:
        return state;
    }
  };
  
  export default transaction;