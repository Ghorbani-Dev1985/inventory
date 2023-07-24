import { useEffect, useRef, useState } from "react";
import { defineStyleConfig } from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";
import { BiCaretDown, BiCaretUp, BiSearchAlt } from "react-icons/bi";

const Filter = () => {
  const [showSortDropDown, setShowSortDropDown] = useState(false);
  const [showCategoryDropDown, setShowCategoryDropDown] = useState(false);
  const sortBtn = useRef(null);
  const catergoryBtn = useRef(null);
  useEffect(() =>
    window.addEventListener(
      "click",
      (ev) => {
        if (sortBtn.current && sortBtn.current.contains(ev.target)) {
          setShowSortDropDown(!showSortDropDown);
        } else {
          setShowSortDropDown(false);
        }
        if (catergoryBtn.current && catergoryBtn.current.contains(ev.target)) {
          setShowCategoryDropDown(!showCategoryDropDown);
        } else {
          setShowCategoryDropDown(false);
        }
      },
      [setShowSortDropDown, setShowCategoryDropDown]
    )
  );
  return (
    <section className="flex justify-between items-center gap-8">
      <div className="flex flex-1 flex-col relative">
        <button
          ref={sortBtn}
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          className="w-full  text-indigo-800 inline-flex justify-between items-center bg-transparent border border-indigo-800 hover:bg-indigo-100 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          {" "}
          <span className="ml-2"> مرتب سازی </span>
          {showSortDropDown ? <BiCaretUp /> : <BiCaretDown />}
        </button>

        <div
          id="dropdownDivider"
          className={`${
            showSortDropDown
              ? "block w-full absolute top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              : "hidden"
          }`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDividerButton"
          >
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              آخرین مورد
            </li>
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              اولین مورد
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 relative">
        <button
          ref={catergoryBtn}
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          className="w-full text-indigo-800 inline-flex justify-between items-center bg-transparent border border-indigo-800 hover:bg-indigo-100 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          {" "}
          <span className="ml-2"> مرتب سازی دسته بندی</span>
          {showCategoryDropDown ? <BiCaretUp /> : <BiCaretDown />}
        </button>

        <div
          id="dropdownDivider"
          className={`${
            showCategoryDropDown
              ? "block w-full absolute top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
              : "hidden"
          }`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDividerButton"
          >
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              آخرین مورد
            </li>
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              اولین مورد
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-1 relative">
        <div className="absolute inset-y-0 left-2 flex items-center">
          <BiSearchAlt className="text-indigo-800 text-xl" />
        </div>
        <input
          type="text"
          id="search"
          className="block w-full px-2 pl-2 py-2.5 text-sm text-indigo-800 border border-gray-300 rounded-lg bg-transparent focus:border-indigo-800 outline-none dark:bg-gray-700 dark:border-gray-600 focus:cursor-pointer hover:cursor-pointer dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="جستجو"
          required
        />
      </div>
    </section>
  );
};

export default Filter;
