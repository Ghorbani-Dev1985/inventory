import React from "react";

const RadioButton = ({ label, name, formik, radioOptions }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center mb-3">
        <label htmlFor={name} className="flex text-orange-600 my-2">
          {label}
        </label>{" "}
        {formik.errors[name] && formik.touched[name] && (
          <span className="text-red-500 text-sm">{formik.errors[name]}</span>
        )}
      </div>
      {radioOptions.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="radio"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name] === item.value}
          />
          <label htmlFor={item.value} className="mx-2 cursor-pointer">
            {item.label}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RadioButton;
