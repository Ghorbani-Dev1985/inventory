import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../Redux/Cake/CakeActions";
import { buyIcecream } from "../../Redux/IceCream/IceCreamActions";
import { useState } from "react";


const ShopHooks = (props) => {
    const [cakeQuintity, setCakeQuintity] = useState(1);
    const [IcecreamQuintity, setIcecreamQuintity] = useState(1);
   const numOfCakes = useSelector(state => state.cake.numOfCakes);
   const numOfIceream = useSelector(state => state.iceCream.numOfIceream);
   const dispatch = useDispatch();
    return ( 
        <>
            <h1>فروشگاه جدید</h1>

            <div className="w-full flex justify-center items-center gap-4 my-2">
        <div className="bg-white flex flex-col items-center p-2 rounded-lg">    
        <h2 className="my-4"> کیک - موجودی  <span className="text-green-600 font-bold text-2xl mx-3">{numOfCakes}</span></h2>
        <input type="number" onChange={(e) => setCakeQuintity(e.target.value)} />
        <button onClick={() => dispatch(buyCake(cakeQuintity))} className="px-6 py-1">افزودن {cakeQuintity} به سبد خرید</button>
        </div>
        <div className="bg-white flex flex-col items-center p-2 rounded-lg">    
        <h2 className="my-4"> بستنی - موجودی  <span className="text-green-600 font-bold text-2xl mx-3">{numOfIceream}</span></h2>
         <input type="number" onChange={(e) => setIcecreamQuintity(e.target.value)} />
        <button onClick={() => dispatch(buyIcecream(IcecreamQuintity))} className="px-6 py-1">افزودن {IcecreamQuintity} به سبد خرید</button>
        </div>
        </div>
        </>
        
     );
};

export default ShopHooks;