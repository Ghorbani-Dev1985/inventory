import { useState } from "react";
import { Link } from "react-router-dom";
import PostSaga from "../PostsSaga/PostsSaga";
import { MdOutlineInventory } from "react-icons/md";
import Headder from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import Category from "../Components/Category/Category";
import Products from "../Components/Products/Products";
import Filter from "../Components/FilterItems/Filter";
import ProductList from "../Components/ProductList/ProductList";

const HomePage = (props) => {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div className="mt-16 w-full flex flex-col items-center">
            <MdOutlineInventory className="text-8xl text-indigo-800" />
            <h1 className="mt-4 hidden text-xl font-semibold lg:block dark:text-gray-300">
              انبارداری مرکزی
            </h1>
          </div>

          <Navigation />
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700"></div>
      </aside>
      <div className="mr-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Headder />
        <div className="px-6 pt-6 2xl:container">
          <div className="grid gap-6 grid-cols-2">
            <div className="col=span-2 md:col-span-1">
              <div className="h-full space-y-6 group p-2 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <Category setCategories={setCategories} />
                <Products categories={categories}/>
              </div>
            </div>
            <div>
              <div className="group p-6 flex flex-col sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 lg:h-full">
                <Filter />
                <p className="w-full bg-gray-300 h-px my-3"></p>
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
