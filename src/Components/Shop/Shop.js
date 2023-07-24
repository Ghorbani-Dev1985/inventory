import { connect } from "react-redux";
import { buyCake } from "../../Redux/Cake/CakeActions";

const Shop = (props) => {
    return ( 
        <>
         <h1>فروشگاه قبلی</h1>
         <div className="w-full flex justify-center items-center gap-4 my-2">
        <div className="bg-white flex flex-col items-center p-2 rounded-lg">
        <h2 className="my-4 font-extrabold text-xl"> کیک - تعداد <span className="text-green-600 bg-slate-300 rounded-lg font-bold text-2xl mx-3">{props.numOfCakes}</span></h2>
        <button onClick={props.buyCake} className="px-6 py-1">خرید</button>
        </div>
         </div>
        </>
        
     );
}
 


// 1. state
// 2. setState()
// 3. connect => redux => react

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake()),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Shop)