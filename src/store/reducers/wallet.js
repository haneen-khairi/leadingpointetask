

const initialState = {
    count: 0,
  };
  
  const wallet = (state = initialState, action) => {
    switch (action.type) {
      case 'SETCOUNT':
        return {
          count:action.payload.count,
        };
      default:
        return state;
    }
  };
  
  export default wallet;
   