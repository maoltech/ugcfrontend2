import Input from "../../../global/Input";
import Button from "../../../global/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { TfiTwitter } from "react-icons/tfi";
import { RiGoogleFill } from "react-icons/ri";
import { useFormik } from "formik";

const Form = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = () => {};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit,
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%] my-auto flex flex-col items-stretch justify-center gap-[0.5rem]"
    >
      <div>
        <div className="text-[8px]]">Welcome! 👋</div>
        <div className="font-[600] tex-[1.5rem]">Login with your account</div>
      </div>
      <Input
        type="email"
        placeholder="Email"
        label="Email"
        required={true}
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Input
        placeholder="password"
        label="Password"
        type="password"
        required={true}
        value={values.password}
        touchedState={touched.password}
        errorState={errors.password}
        suffix={true}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Button
        type="submit"
        className={"bg-[#0030AB] text-[0.8rem] mt-[1rem] text-white w-full"}
      >
        Log In
      </Button>
      <div className="w-full border-solid border-[2px] border-[#E5E7EB] relative my-[1rem]">
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mx-auto p-[0.2rem] text-[0.6rem] bg-white rounded-full">
          OR
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-[1rem]">
        <Button
          className={"bg-[#1D9BF0] text-[0.8rem] px-[0.5rem] text-white w-full"}
        >
          <div className="relative">
            <TfiTwitter className="absolute left-[1%] top-[50%] translate-y-[-50%]" />
            <span>Log In with Twitter</span>
          </div>
        </Button>
        <Button
          className={"bg-[#E94235] text-[0.8rem] px-[0.5rem] text-white w-full"}
        >
          <div className="relative">
            <RiGoogleFill className="absolute left-[1%] top-[50%] translate-y-[-50%]" />
            <span>Log In with Google</span>
          </div>
        </Button>
      </div>
    </form>
  );
};

export default Form;
