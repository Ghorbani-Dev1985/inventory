import { BUY_CAKE } from "./CakeTypes";

export function buyCake(quintity = 1){
    return {
        type: BUY_CAKE,
        payload: quintity,
    }
}