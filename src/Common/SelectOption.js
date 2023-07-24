import React from "react";
const selectOption = ({ label, name, formik, selectOptions }) => {
  return (
    <div className="w-full" name={name}>
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center mb-3">
        <label htmlFor={name} className="flex text-orange-600 my-2">
          {label}
        </label>{" "}
        {formik.errors[name] && formik.touched[name] && (
          <span className="text-red-500 text-sm">{formik.errors[name]}</span>
        )}
      </div>
      <select name={name} {...formik.getFieldProps({ name })}>
        {selectOptions.map((item) => (
          <React.Fragment key={item.value}>
            <option
              type="radio"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
            >
              {item.label}
            </option>
          </React.Fragment>
        ))}
      </select>
    </div>
  );
};

export default selectOption;
