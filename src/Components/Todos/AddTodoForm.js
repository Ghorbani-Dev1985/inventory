import { useState } from "react";
import { BiShare } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addAsyncTodos, deleteAsyncTodos } from "../../Features/Counter/TodosSlice";



const AddTodoForm = () => {
    const [value , setValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (event) => {
    event.preventDefault();
    dispatch(deleteAsyncTodos({title: value}));
    toast.success(`تسک ${value} با موفقیت ثبت گردید`);
    navigate("/todolist");
    }
  return (
    <>
      <div className="w-full flex items-center max-w-lg">
            <Link to="/todolist" className="w-full flex justify-between items-center">
                       <span> مشاهده همه تسک ها</span>
            <BiShare className="text-xl text-orange-500" />
            </Link>
             </div>
    <form onSubmit={onSubmit} className="inline-flex flex-col items-center w-full max-w-lg bg-slate-50 rounded-lg my-4 p-8">
      <div className="w-full relative z-0">
        <input
          type="text"
          id="floating_standard"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <label
          htmlFor="floating_standard"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
          موضوع تسک
        </label>
      </div>
      <button type="submit" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-12">ثبت تسک جدید</button>
    </form>
            </>
  );
};

export default AddTodoForm;
