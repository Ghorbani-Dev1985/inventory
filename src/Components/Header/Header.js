import Navigation from "../Navigation/Navigation";


const Headder = ({ categories, products }) => {
  return (
    <header className="sticky top-0 h-auto border-b bg-white dark:bg-gray-800 dark:border-gray-700 py-2.5">
      <div className="flex items-center justify-center md:justify-end space-x-4 px-6 2xl:container">
        <h5
          className="text-lg md:text-2xl font-extrabold bg-indigo-100 rounded-lg md:rounded-3xl px-6 py-1 lg:block dark:text-white"
        >
          سیستم مدیریت انبارداری
        </h5>
      </div>
      <div className="mx-3 mb-7 md:hidden">
      <Navigation categories={categories} products={products}/>
      </div>
    </header>
  );
};

export default Headder;
