import Input from "../../../global/Input";
import Button from "../../../global/Button";
import ButtonOverlay from "../../../global/layout/ButtonOverlay";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "../../../global/antd/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../../../redux/authslice/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { TfiTwitter } from "react-icons/tfi";
import { RiGoogleFill } from "react-icons/ri";
import { useFormik } from "formik";
import { registrationSchema } from "../../../global/validationSchemas/registrationSchema";
import {
  register,
  googleauth,
  twitterauth,
} from "../../../redux/authslice/authServices";
import { toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const dispatch = useDispatch();

  const googleSignup = () => {
    dispatch(googleauth()).then((action) => {
      console.log(action);
    });
  };

  const twitterSignup = () => {
    dispatch(twitterauth()).then((action) => {
      console.log(action);
    });
  };

  const onSubmit = (values, actions) => {
    dispatch(
      register({
        ...values,
        firstName: values.firstname,
        lastName: values.lastname,
      })
    )
      .unwrap()
      .then((action) => {
        console.log(action);
        navigate("/welcome");
      })
      .catch((error) => {
        console.log(error, error.response, error.request);
        let errorObject = JSON.parse(JSON.stringify(error));
        console.log(errorObject);
        toast.error(error.message);
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: registrationSchema,
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%] my-auto flex flex-col items-stretch justify-center gap-[0.2rem]"
    >
      <div>
        <div className="text-[8px]]">Welcome! 👋</div>
        <div className="font-[600] tex-[1.5rem]">Sign Up your Account</div>
      </div>
      <div className="flex items-center justify-between gap-[0.8rem]">
        <Input
          placeholder="First Name"
          label="First Name"
          required={true}
          value={values.firstname}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          placeholder="Last Name"
          label="Last Name"
          required={true}
          value={values.lastname}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </div>
      <Input
        placeholder="User Name"
        label="User Name"
        required={true}
        value={values.username}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Input
        placeholder="Email"
        label="Email"
        type="email"
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
      <Input
        placeholder="Confirm Password"
        label="Confirm Password"
        type="password"
        required={true}
        value={values.confirmpassword}
        touchedState={touched.confirmpassword}
        errorState={errors.confirmpassword}
        suffix={true}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <ReCAPTCHA
        sitekey="6LfOz4MkAAAAAOXP-ReFITefFVIjniBi19zt2nts"
        theme="light"
      />
      <Button
        type="submit"
        className={"bg-[#0030AB] relative text-[0.8rem] text-white w-full"}
      >
        {auth?.isLoading === statusActions.register.loading && (
          <ButtonOverlay>
            <Spinner />
          </ButtonOverlay>
        )}
        Sign Up
      </Button>
      <div className="self-start font-[500] text-center tracking-[0.25px] text-[14px] leading-[23px] text-black pt2">
        <p>
          Already have an Account?{" "}
          <Link to="/login" className="text-[#0030AB]">
            Log In
          </Link>
        </p>
      </div>
      <div className="w-full border-solid border-[2px] border-[#E5E7EB] relative my-[1rem]">
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mx-auto p-[0.2rem] text-[0.6rem] bg-white rounded-full">
          OR
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-[0.5rem]">
        <Button
          className={"bg-[#1D9BF0] text-[0.8rem] px-[0.5rem] text-white w-full"}
          onClick={twitterSignup}
        >
          {auth?.isLoading === statusActions.twitterauth.loading && (
            <ButtonOverlay>
              <Spinner />
            </ButtonOverlay>
          )}
          <div className="relative">
            <TfiTwitter className="absolute left-[1%] top-[50%] translate-y-[-50%]" />
            <span>Sign Up with Twitter</span>
          </div>
        </Button>
        <Button
          className={"bg-[#E94235] text-[0.8rem] px-[0.5rem] text-white w-full"}
          onClick={googleSignup}
        >
          {auth?.isLoading === statusActions.googleauth.loading && (
            <ButtonOverlay>
              <Spinner />
            </ButtonOverlay>
          )}
          <div className="relative">
            <RiGoogleFill className="absolute left-[1%] top-[50%] translate-y-[-50%]" />
            <span>Sign Up with Google</span>
          </div>
        </Button>
      </div>
    </form>
  );
};

export default Form;
