import React from "react";
import Input from "../../../global/Input";
import Button from "../../../global/Button";
import { useFormik } from "formik";
import { registrationSchema } from "../../../global/validationSchemas/registrationSchema";

const Form = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const onSubmit = () => {};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: registrationSchema,
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-stretch justify-center gap-[1rem]"
    >
      <div>Welcome! 👋</div>
      <div>Sign Up your Account</div>
      <div>
        <Input
          placeholder="First Name"
          required={true}
          value={values.firstname}
          handleChange={handleChange}
        />
        <Input
          placeholder="Last Name"
          required={true}
          value={values.lastname}
          handleChange={handleChange}
        />
      </div>
      <Input
        placeholder="Email"
        required={true}
        value={values.password}
        handleChange={handleChange}
      />
      <Input
        placeholder="password"
        type="password"
        required={true}
        values={values.password}
        touchedState={touched.password}
        errorState={errors.password}
        suffix={true}
        handleChange={handleChange}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        required={true}
        values={values.confirmpassword}
        touchedState={touched.confirmpassword}
        errorState={errors.confirmpassword}
        suffix={true}
        handleChange={handleChange}
      />
      <Button className={"bg-[#0030AB] text-white"}>Sign Up</Button>
    </form>
  );
};

export default Form;
