import React from "react";

const BooleanCheackBox = ({ label, name, formik }) => {
  return (
    <div className="w-full">
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center mb-3">
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-red-500 text-sm">
          {formik.errors[name]}
        </span>
      )}
    </div>
    <input
      type="checkbox"
      id={name}
      name={name}
      value={true}
      onChange={formik.handleChange}
      checked={formik.values[name]}
    />
    <label htmlFor={name} className="mx-2 cursor-pointer text-sky-600">
     {label}
    </label>
  </div>
  );
};

export default BooleanCheackBox;
