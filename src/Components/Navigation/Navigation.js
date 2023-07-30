import { BiSolidCategory, BiSolidParking } from "react-icons/bi";
import { NavLink, useParams } from "react-router-dom";

const navItems = [
  { name: "صفحه اصلی", to: "/", exact: true },
  { name: "شمارنده", to: "/counter" },
  { name: "مدیریت تسک", to: "/todolist" },
  { name: "درباره ما", to: "/aboutUs" },
  { name: "مطالب خواندنی", to: "/blogs" },
  { name: "پست ها", to: "/post" },
  { name: "حساب کاربری", to: "/profile" },
];

const Navigation = ({ categories, products }) => {
  const params = useParams();
  return (
    <>
      <nav>
        <ul className="mt-8 space-y-6 tracking-wide">
          <li className="flex justify-between items-center rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 px-4 py-3 text-white">
            <div className="flex justify-center items-center">
              <BiSolidCategory className="text-white text-lg ml-2" />
              <span className="-mr-1 font-bold">دسته بندی</span>
            </div>
            <span className="text-indigo-900 flex justify-center items-center bg-white w-5 h-5 text-lg font-bold rounded-full p-3">
              {categories.length}
            </span>
          </li>
          <li className="flex justify-between items-center rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 px-4 py-3 text-white">
            <div className="flex justify-center items-center">
              <BiSolidParking className="text-white text-lg ml-2" />
              <span className="-mr-1 font-bold">محصول</span>
            </div>
            <span className="text-indigo-900 flex justify-center items-center bg-white w-5 h-5 text-lg font-bold rounded-full p-3">
              {products.length}
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
