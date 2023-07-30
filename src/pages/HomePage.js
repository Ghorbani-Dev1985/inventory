import { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [selectedCategory , setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filteredSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue , selectedCategory]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const searchHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };
  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value)
  }
  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };
  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((itemOne, itemTwo) => {
      if (sort === "latest") {
        return new Date(itemOne.createdAt) > new Date(itemTwo.createdAt)
          ? -1
          : 1;
      } else if (sort === "earliest") {
        return new Date(itemOne.createdAt) > new Date(itemTwo.createdAt)
          ? 1
          : -1;
      }
    });
  };
  const filteredSelectedCategory = (array) => {
    if(!selectedCategory) return array;
    return array.filter((item) => item.categoryId == selectedCategory);
  }
  useEffect (() => {
  const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
  const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
  setProducts(savedProducts);
  setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if(products.length) localStorage.setItem('products' , JSON.stringify(products));
  } , [products]);

  useEffect(() => {
   if(categories.length) localStorage.setItem('categories' , JSON.stringify(categories));
  } , [categories]);

  return (
    <>
      <aside className="fixed top-0 z-10 ml-[-100%] hidden lg:flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div className="mt-16 w-full flex flex-col items-center">
            <MdOutlineInventory className="text-8xl text-indigo-800" />
            <h1 className="mt-4 hidden text-xl font-semibold lg:block dark:text-gray-300">
              انبارداری مرکزی
            </h1>
          </div>

          <Navigation categories={categories} products={products}/>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700"></div>
      </aside>
      <div className="mr-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Headder categories={categories} products={products}/>
        <div className="px-6 pt-6 2xl:container">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="col=span-2 md:col-span-1">
              <div className="space-y-6 group p-2 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                <Category setCategories={setCategories} />
                <Products categories={categories} setProducts={setProducts} />
              </div>
            </div>
            <div className="group p-6 flex flex-col sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 lg:h-full">
              <Filter
                sort={sort}
                searchValue={searchValue}
                onSort={sortHandler}
                onSearch={searchHandler}
                categories={categories}
                selectedCategory= {selectedCategory}
                onSelectCategory = {selectCategoryHandler}
              />
              <p className="w-full bg-gray-300 h-px my-3"></p>
              <ProductList
                products={filteredProducts}
                categories={categories}
                setProducts={setProducts}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
