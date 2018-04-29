export default (state = [ ], action = {} ) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
        return [
            ...state,
            action.business
        ];
        default:  return state;
    }
   
}