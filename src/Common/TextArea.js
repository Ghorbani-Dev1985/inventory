const TextArea = ({ label, name, formik, placeholder  }) => {
  return (
    <div className="relative z-0 mb-10">
      <textarea
        {...formik.getFieldProps({ name })}
        
        name={name}
        id={name}
        value={formik.values[name]}
        className="block py-2.5 px-0 w-full text-sm text-indigo-800 bg-transparent border-0 border-b-2 border-indigo-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-800 focus:outline-none focus:ring-0 focus:border-indigo-800 peer"
      ></textarea>
      <label
        htmlFor={name}
        className="absolute text-sm text-indigo-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-inborder-indigo-800 peer-focus:dark:text-inborder-indigo-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-red-500 text-sm">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default TextArea;
