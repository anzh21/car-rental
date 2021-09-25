import { RENT_A_CAR, REMOVE_A_CAR } from '../Constants'

export const RentCar = (data)=>{
    return{
        type:RENT_A_CAR,
        data: data
    }
}

export const RemoveCar= ()=>{
    return{
        type:REMOVE_A_CAR,
        data:data
    }
}