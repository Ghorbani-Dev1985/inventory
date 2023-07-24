import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Input from "../../Common/Input";
import RadioButton from "../../Common/RadioButton";
import SelectOption from "../../Common/SelectOption";
import CheackBox from "../../Common/CheackBox";
import BooleanCheackBox from "../../Common/BooleanCheackBox";

//* for formik

const initialValues = {
  name: "",
  gender: "",
  levelOfEducation: "",
  selectCourse: [],
  mobileNumber: "",
  email: "",
  password: "",
  passwordConfirm: "",
  terms: false,
};

const onSubmit = (values) => {
  console.log(values);
  axios
    .post("http://localhost:3001/users", values)
    .then((res) => console.log(res.data).catch((err) => console.log(err)));
};

const radioOptions = [
  { label: "زن", value: "0" },
  { label: "مرد", value: "1" },
];

const cheackboxOptions = [
  { label: " جاوااسکریپت", value: "js" },
  { label: "   ریکت جی اس", value: "react.js" },
  { label: "  نکست", value: "next.js" },
  { label: "  نود جی اس", value: "node.js" },
];

const selectOptions = [
  { label: "لطفا یک مورد را انتخاب نمایید", value: "" },
  { label: " زیر دیپلم", value: "highSchool" },
  { label: "دیپلم", value: "diploma" },
  { label: " فوق دیپلم", value: "ad" },
  { label: "لیسانس", value: "bd" },
  { label: "فوق لیسانس", value: "md" },
  { label: "دکتری", value: "phd" },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required("ورود نام الزامی می باشد")
    .min(4, "تعداد کاراکتر ها کمتر از حد مجاز می باشد."),
  gender: Yup.string().required("انتخاب جنسیت الزامی می باشد"),
  levelOfEducation: Yup.string().required(
    "انتخاب میزان تحصیلات الزامی می باشد"
  ),
  selectCourse: Yup.array()
    .min(1)
    .required("انتخاب حداقل یک دوره الزامی می باشد"),
  mobileNumber: Yup.string()
    .required("ورود شماره موبایل الزامی می باشد")
    .matches(/^[0-9]{11}$/, "شماره موبایل را به درستی وارد نمایید")
    .nullable(),
  email: Yup.string()
    .email("ایمیل وارد شده اشتباه است")
    .required("ورود ایمیل الزامی می باشد"),
  password: Yup.string()
    .required("ورود کلمه عبور الزامی می باشد")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "باید شامل حداقل ۸ کاراکتر، حروف بزرگ، حروف کوچک، عدد و  کاراکترهای !@#$%^&* باشد"
    ),
  passwordConfirm: Yup.string()
    .required("ورود تکرار کلمه عبور الزامی می باشد")
    .oneOf([Yup.ref("password"), null], "کلمه عبور همخوانی ندارد"),
  terms: Yup.boolean()
    .oneOf([true], "قوانین سایت باید پذیرفته شود")
    .required("پذیرفتن قوانین سایت الزامی می باشد"),
});

const SignUpFrom = () => {
  const [formValues, setFormValues] = useState(null);
  // const [userData , setUserData] = useState({name: "" , email: "", password:""});
  // const changeHandler = ({target}) => {
  //     setUserData({...userData, [target.name]: target.value});
  // } handel with formik
  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/users/1")
//       .then((res) => setFormValues(res.data))
//       .catch((err) => console.log(err));
//   }, []);

  return (
    <div className="w-full shadow-xl max-w-2xl bg-white flex flex-col items-center rounded-lg p-4">
      <h2 className="w-full flex justify-center items-center bg-slate-100 p-2 rounded-lg text-lg font-extrabold my-3">
        ثبت نام
      </h2>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-lg">
        <Input
          label="نام و نام خانوادگی"
          name="name"
          formik={formik}
          placeholder="لطفا نام و نام خانوادگی را وارد نمایید"
        />
        <div className="w-full flex justify-between items-center">
          <RadioButton
            label="جنسیت"
            radioOptions={radioOptions}
            name="gender"
            formik={formik}
          />
          <SelectOption
            label="میزان تحصیلات"
            selectOptions={selectOptions}
            name="levelOfEducation"
            formik={formik}
          />
        </div>
        <CheackBox
          label="انتخاب دوره"
          cheackboxOptions={cheackboxOptions}
          name="selectCourse"
          formik={formik}
        />
        <Input
          label="شماره موبایل"
          name="mobileNumber"
          formik={formik}
          placeholder="لطفا موبایل خود را وارد نمایید"
        />
        <Input
          label=" ایمیل"
          name="email"
          formik={formik}
          placeholder="لطفا ایمیل خود را وارد نمایید"
        />
        <Input
          label=" کلمه عبور"
          name="password"
          type="password"
          formik={formik}
          placeholder="لطفا کلمه عبور خود را وارد نمایید"
        />
        <Input
          label="تکرار کلمه عبور"
          name="passwordConfirm"
          type="password"
          formik={formik}
          placeholder="لطفا کلمه عبور خود را مجدد وارد نمایید"
        />
        <BooleanCheackBox
          label=" قوانین و شرایط سایت"
          formik={formik}
          name="terms"
        />
        <div className="w-full gap-4 flex flex-col md:flex-row md:justify-between items-center my-4">
          {/* <button className="w-full" onClick={() => setFormValues(savedData)}>بازیابی اطلاعات</button> */}
          <button
            type="submit"
            className="w-full disabled:opacity-30"
            disabled={!formik.isValid}
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpFrom;

//  1. state managment
// 2. handling form submission
// 3. validation = error massage
//   =====> formik
