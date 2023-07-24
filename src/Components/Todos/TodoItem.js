import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteAsyncTodos, deleteTodo, toggleCompleteAsyncTodos } from "../../Features/Counter/TodosSlice";

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    
    const deleteTodoHandler = (id) => {
        dispatch(deleteAsyncTodos({id}));
        toast.warning(`تسک با موفقیت حذف گردید`);
    }
  return (
    <li key={id} className={`${completed ? "bg-green-100" : "bg-gray-100"} rounded-lg shadow-md px-2 my-5`}>
      <div onClick={() => dispatch(toggleCompleteAsyncTodos({id , completed : !completed , title}))} className="flex justify-between items-center ">
        <div className="flex items-center pl-4 rounded cursor-pointer">
          <input
            id={id}
            type="checkbox"
            value=""
            checked={completed}
            onChange={e => dispatch(toggleCompleteAsyncTodos({id , completed : !completed , title}))}
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={id}
            className={`${completed && "line-through opacity-60"} w-full py-4 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
          >
            {title}
          </label>
        </div>
            <BiTrash className="text-lg text-red-500 cursor-pointer" onClick={() => (deleteTodoHandler(id))}/>
      </div>
    </li>
  );
};

export default TodoItem;
