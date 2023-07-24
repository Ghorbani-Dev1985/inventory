import { useSelector } from "react-redux";

const TotalCompleteItem = () => {
   const {todos} = useSelector(state => state.todos);
    return ( 
        <div className="font-bold">
   تکمبل شده:‌ <span className="text-lg bg-green-100 text-green-500 px-3 py-1 rounded-lg">{todos.filter((t) => t.completed).length}</span>
        </div>
     
     );
}
 
export default TotalCompleteItem;