import { BiTrash } from "react-icons/bi";

const ProductList = () => {
  return (
    <div className="relative overflow-y-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-indigo-800 dark:text-gray-400">
        <thead className="text-base text-white bg-indigo-800 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              نام محصول
            </th>
            <th scope="col" className="px-6 py-3">
              تاریخ ایجاد
            </th>
            <th scope="col" className="px-6 py-3">
              دسته بندی
            </th>
            <th scope="col" className="px-6 py-3">
              تعداد
            </th>
            <th scope="col" className="px-6 py-3">
              حذف
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-indigo-50 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              مورد اول
            </th>
            <td className="px-6 py-4">3434</td>
            <td className="px-6 py-4">لپ تاپ</td>
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4 flex justify-center items-center">
              <BiTrash className="text-red-500 text-lg" />
            </td>
          </tr>
          <tr className="border-b even:bg-indigo-50 odd:bg-white dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              مورد دوم
            </th>
            <td className="px-6 py-4">43466</td>
            <td className="px-6 py-4">میز کامییوتر</td>
            <td className="px-6 py-4">12</td>
            <td className="px-6 py-4 flex justify-center items-center">
              <BiTrash className="text-red-500 text-lg" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
