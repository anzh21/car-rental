import { RENT_A_CAR, GET_ALL_CAR, GET_DATA_FAILED, PRODUCT_LOADING } from '../Constants'
import axios from 'axios';

export const getAllCar = () => {
    return (dispatch) => {
      dispatch(setProductLoading());
  
      axios
        .get("http://localhost:8000/car")
        .then((res) => {
          console.log("res", res.data);
          dispatch({
            type: GET_ALL_CAR,
            payload: res.data,
          });
        })
  
        .catch((err) => {
          console.log("err", err);
          dispatch({
            type: GET_DATA_FAILED,
            payload: err,
          });
        });
    };
  };

  export const setProductLoading = () => {
    return {
      type: PRODUCT_LOADING,
    };
  };
  

// export const RemoveCar= ()=>{
//     return{
//         type:REMOVE_A_CAR,
//         data:data
//     }
// }