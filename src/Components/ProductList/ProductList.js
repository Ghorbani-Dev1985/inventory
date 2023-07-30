import { BiTrash } from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { toast } from "react-toastify";
const ProductList = ({ products, categories, setProducts }) => {
  const findCategory = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };
  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== parseInt(productId)
    );
    setProducts(filteredProducts);
    toast.warning(`محصول با موفقیت حذف گردید`)
  };
  return (
    <>
      {products.length > 0 ? (
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
              {products.map((product) => {
                return (
                  <>
                    <tr
                      key={product.id}
                      className="even:bg-indigo-50 odd:bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-indigo-800 whitespace-pre-wrap dark:text-white"
                        >
                        {product.title}
                      </th>
                      <td className="px-6 py-4">
                        {new Date(product.createdAt).toLocaleDateString(
                          "fa-IR"
                          )}
                      </td>
                      <td className="px-6 py-4">
                        {findCategory(product.categoryId)}
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap">
                        <span
                          className={`${
                            product.quantity > 1
                            ? "bg-green-100 text-green-600"
                            : "bg-rose-100 text-rose-600"
                          } rounded-full flex justify-center items-center w-8 h-8 p-2`}
                          >
                          {product.quantity}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <BiTrash
                          onClick={() => deleteProduct(product.id)}
                          className="text-red-500 text-lg cursor-pointer hover:text-xl"
                          />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="w-full flex justify-center items-center bg-indigo-200 text-indigo-800 rounded-lg p-3">
          <HiOutlineExclamationCircle className="ml-2 text-2xl" /> هیچ محصولی
          ثبت نگردیده است
        </h1>
      )}
    </>
  );
};

export default ProductList;
