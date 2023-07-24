import { useEffect } from "react";
import { BiSolidPlusSquare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import { getAsyncTodos } from "../../Features/Counter/TodosSlice";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";
import TotalCompleteItem from "./TotalCompleteItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  
  if (loading) return <Loading />;
  if (error) return toast.error("خطا در برقراری ارتباط با سرور");

  return (
    <>
    <div className="w-full max-w-lg flex justify-center items-center bg-slate-300 rounded-lg p-2 my-8">
   
      <TotalCompleteItem /> 
    </div>
      <div className="w-full max-w-lg">
        <Link to="/addtodo" className="flex justify-between items-center">
          <span> افزودن تسک جدید</span>
          <BiSolidPlusSquare className="text-xl" />
        </Link>
      </div>
      <ul className="w-full max-w-lg">
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
