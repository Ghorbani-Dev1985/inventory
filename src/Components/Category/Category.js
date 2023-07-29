import { useState } from "react";
import { BiLayerPlus } from "react-icons/bi";
import { toast } from "react-toastify";

const Category = ({setCategories}) => {
  const [isSHOW, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });


  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };
  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {...categoryFormData , id: new Date().getTime() , createdAt : new Date().toISOString()}
    setCategories((prevState) => [...prevState , newCategory]);
    setIsShow(false);
    toast.success(`دسته بندی ${categoryFormData.title} با موفقیت افزوده شد`);
    categoryFormData.title = "";
    categoryFormData.description = "";
  };
  return (
    <form>
      <div className="w-full flex flex-col bg-indigo-50 p-2 mb-6 rounded-md">
        <h1
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`cursor-pointer text-indigo-800 flex items-center font-bold text-base mb-8 ${
            isSHOW ? "opacity-1" : "opacity-50"
          }`}
        >
          <BiLayerPlus className="text-indigo-800 text-xl ml-2" />
          <span> افزودن دسته بندی جدید</span>
        </h1>
        <div className={`${isSHOW ? "w-full flex flex-col" : "hidden"}`}>
          <div className="relative z-0 mb-10">
            <input
              type="text"
              name="title"
              value={categoryFormData.title}
              onChange={changeHandler}
              id="categorySubject"
              className="block py-2.5 px-0 w-full text-sm text-indigo-800 bg-transparent border-0 border-b-2 border-indigo-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-800 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
              placeholder=" "
            />
            <label
              htmlFor="categorySubject"
              className="absolute text-sm text-indigo-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-inborder-indigo-800 peer-focus:dark:text-inborder-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              عنوان
            </label>
          </div>
          <div className="relative mb-10">
            <textarea
              name="description"
              id="categoryDescription"
              value={categoryFormData.description}
              onChange={changeHandler}
              aria-describedby="categoryDescription_text"
              className="bg-transparent block rounded-t-lg px-0 pb-2.5 pt-5 w-full text-sm text-indigo-800 dark:bg-gray-700 border-0 border-b-2 border-indigo-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-800 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="categoryDescription"
              className="absolute text-sm text-indigo-800 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] right-0 peer-focus:text-indigborder-indigo-800 peer-focus:dark:text-indigborder-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              توضیح
            </label>
          </div>
          <div className="flex justify-center items-center gap-4 my-6">
            <div className="flex flex-1">
              <button
                type="button"
                onClick={addNewCategoryHandler}
                className="focus:outline-none w-full text-white bg-indigo-800 hover:bg-white focus:ring-4 focus:ring-inbg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-800 dark:hover:bg-indigo-800 dark:focus:ring-inbg-indigo-800"
              >
                ثبت دسته بندی جدید
              </button>
            </div>
            <div className="flex flex-1">
              <button
                onClick={() => setIsShow(false)}
                type="button"
                className="w-full py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-800 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Category;
