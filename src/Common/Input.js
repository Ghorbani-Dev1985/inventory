const Input = ({ label, name, formik, type = "text", placeholder }) => {
  return (
    <div className="w-full my-3">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center mb-3">
        <label htmlFor={name} className="flex text-orange-600 my-2">
          {label}
        </label>{" "}
        {formik.errors[name] && formik.touched[name] && (
          <span className="text-red-500 text-sm">{formik.errors[name]}</span>
        )}
      </div>
      <input
        {...formik.getFieldProps({ name })}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
