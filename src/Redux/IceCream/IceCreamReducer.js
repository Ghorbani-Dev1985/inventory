import { BUY_ICECREAM } from "./IceCreamTypes"

const initialState ={
    numOfIceream : 30,
}

const IcecreamReducer = (state = initialState , action) =>{
    switch(action.type){
        case BUY_ICECREAM: 
        if(state.numOfIceream > 1) {
            return {...state, numOfIceream :  state.numOfIceream - action.payload};
        }
         default :
         return state;
    }
};

export default IcecreamReducer;