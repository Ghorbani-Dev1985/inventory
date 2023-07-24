import React from "react";

const CheackBox = ({ label, name, formik, cheackboxOptions }) => {
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
      {cheackboxOptions.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="checkbox"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name].includes(item.value)}
          />
          <label htmlFor={item.value} className="mx-2 cursor-pointer">
            {item.label}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheackBox;
