import { useEffect, useState } from "react";

import { BiCaretDown, BiSearchAlt } from "react-icons/bi";

const Filter = ({ sort , onSort, onSearch ,searchValue , categories , selectedCategory , onSelectCategory}) => {
  console.log(searchValue);
  return (
    <section className="flex flex-col items-center ">
      <div className="w-full lg:max-w-lg flex justify-between items-center gap-5">
       <div className="flex flex-1 relative">
        <div className="absolute inset-y-0 left-2 flex items-center">
          <BiSearchAlt className="text-indigo-800 text-xl" />
        </div>
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={onSearch}
          className="block w-full px-2 pl-2 py-2.5 text-sm text-indigo-800 border border-gray-300 rounded-lg bg-transparent focus:border-indigo-800 outline-none dark:bg-gray-700 dark:border-gray-600 focus:cursor-pointer hover:cursor-pointer dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="جستجو"
          required
        />
      </div>
      <div className="flex flex-1 relative">
        <BiCaretDown className="text-indigo-800 absolute left-1 top-3 text-xl" />
        <select
          name="categoryId"
          value={sort}
          onChange={onSort}
          className="w-full cursor-pointer text-indigo-800 bg-transparent border border-indigo-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 appearance-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <option value="" disabled>مرتب سازی</option>
          <option
            className="block w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            value="earliest"
          >
            جدیدترین
          </option>
          <option
            className="block w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            value="latest"
          >
            قدیمی ترین
          </option>
        </select>
      </div>
      </div>
      <div className="w-full lg:max-w-lg flex flex-1 relative my-4">
        <BiCaretDown className="text-indigo-800 absolute left-1 top-3 text-xl" />
        <select
          name="selectedCategory"
          value={selectedCategory}
          onChange={onSelectCategory}
          className="w-full cursor-pointer text-indigo-800 bg-transparent border border-indigo-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 appearance-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <option value="" disabled>مرتب سازی بر اساس دسته بندی</option>

          {categories.map((category) => {
            return (
          <option
            key={category.id}
            className="block w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            value={category.id}
          >
            {category.title}
          </option>
            )
          })};
        </select>
      </div>
    </section>
  );
};

export default Filter;
