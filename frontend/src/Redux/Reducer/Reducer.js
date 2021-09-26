import {GET_ALL_CAR,} from '../Constants';

const Initial_State = {
    products: null,
    product: null,
    errors: {},
  }



  export default (state = Initial_State, action) => {
    switch (action.type) {
    
      case GET_ALL_CAR:
        return {
          ...state,
          loading: false,
          errors: {},
          products: action.payload,
        };
      
      default:
        return state;
    }
  };