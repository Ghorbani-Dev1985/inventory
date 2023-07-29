import { useState } from "react";
import { BiCaretDown, BiSolidPlusCircle } from "react-icons/bi";
import { toast } from "react-toastify";

const Products = ({ categories , setProducts }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 1,
    categoryId: "",
  });

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setProductsFormData({ ...productsFormData, [name]: value });
  };
  const addNewProduct = (e) => {
     e.preventDefault();
     const newProduct = {...productsFormData , id: new Date().getTime() , createdAt : new Date().toISOString()}
     setProducts((prevState) => [...prevState , newProduct]);
     toast.success(`محصول ${productsFormData.title} با موفقیت ثبت شد`);
    setProductsFormData({title: "" , quantity : 1 , categoryId: ""});
  };
  return (
    <form>
      <div className="w-full flex flex-col bg-indigo-50 p-2 rounded-md">
        <h1 className="cursor-pointer text-indigo-800 flex items-center font-bold text-base mb-8">
          <BiSolidPlusCircle className="text-indigo-800 text-xl ml-2" />
          <span> افزودن محصول جدید</span>
        </h1>
        <div className="relative z-0 mb-10">
          <input
            type="text"
            id="categorySubject"
            name="title"
            value={productsFormData.title}
            onChange={changeHandler}
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
        <div className="relative z-0 mb-10">
          <input
            type="number"
            name="quantity"
            value={productsFormData.quantity}
            onChange={changeHandler}
            min="1"
            id="categorySubject"
            className="block py-2.5 px-0 w-full text-sm text-indigo-800 bg-transparent border-0 border-b-2 border-indigo-200 appearance-none dark:text-white dark:border-gray-200 dark:focus:border-indigo-800 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
            placeholder=" "
          />
          <label
            htmlFor="categorySubject"
            className="absolute text-sm text-indigo-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-inborder-indigo-800 peer-focus:dark:text-inborder-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            تعداد
          </label>
        </div>
        <div className="w-full relative">
          <BiCaretDown className="text-indigo-800 absolute left-1 top-3 text-xl" />
          <select
            name="categoryId"
            value={productsFormData.categoryId}
            onChange={changeHandler}
            className="w-full cursor-pointer text-indigo-800 bg-transparent border border-indigo-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 appearance-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <option
             value=""
             disabled
            >
              لطفا یکی از دسته بندی ها را انتخاب نمایید
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  value={category.id}
                  className="block w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full">
          <button
            onClick={addNewProduct}
            type="button"
            className="focus:outline-none w-full text-white bg-indigo-800 hover:bg-white focus:ring-4 focus:ring-inbg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-800 dark:hover:bg-indigo-800 dark:focus:ring-inbg-indigo-800"
          >
            ثبت محصول جدید
          </button>
        </div>
      </div>
    </form>
  );
};

export default Products;
