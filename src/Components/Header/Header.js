

const Headder = ({ text }) => {
  return (
    <header className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
      <div className="flex items-center justify-end space-x-4 px-6 2xl:container">
        <h5
          hidden
          className="text-2xl font-extrabold bg-indigo-100 rounded-3xl px-6 py-1 lg:block dark:text-white"
        >
          سیستم مدیریت انبارداری
        </h5>
        <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="my-auto h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Headder;
