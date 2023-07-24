import { BUY_ICECREAM } from "./IceCreamTypes";

export function buyIcecream(quintity =1){
    return {
        type: BUY_ICECREAM,
        payload: quintity,
    }
}