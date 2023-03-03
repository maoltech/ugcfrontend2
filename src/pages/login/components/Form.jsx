import Input from "../../../global/Input";
import Button from "../../../global/Button";
import ButtonOverlay from "../../../global/layout/ButtonOverlay";
import Spinner from "../../../global/antd/Spinner";
import { Link } from "react-router-dom";
import { statusActions } from "../../../redux/authslice/authSlice";
import { TfiTwitter } from "react-icons/tfi";
import { RiGoogleFill } from "react-icons/ri";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  login,
  googleauth,
  twitterauth,
} from "../../../redux/authslice/authServices";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const initialValues = {
    emailusername: "",
    password: "",
  };

  const googleLogin = () => {
    dispatch(googleauth()).then((action) => {
      console.log(action);
    });
  };

  const twitterLogin = () => {
    dispatch(twitterauth()).then((action) => {
      console.log(action);
    });
  };

  const onSubmit = (values) => {
    dispatch(
      login({ login: values.emailusername, password: values.password })
    ).then((action) => {
      console.log(action);
      if (action.type.includes("fulfilled")) {
        navigate("/services");
      }
    });
  };

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
        placeholder="Email/Username"
        label="Email/Username"
        required={true}
        value={values.login}
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
        className={
          "bg-[#0030AB] relative text-[0.8rem] mt-[1rem] text-white w-full"
        }
      >
        {auth?.isLoading === statusActions.login.loading && (
          <ButtonOverlay>
            <Spinner />
          </ButtonOverlay>
        )}
        Log In
      </Button>
      <div className="flex items-center justify-between">
        <div className="my4">
          <Link to="/reset-password" className="text-[#0030AB]">
            Forget password?
          </Link>
        </div>
        <div className="font-[500] text-center tracking-[0.25px] text-[14px] leading-[23px] text-black pt2">
          <p>
            Don't have an Account?{" "}
            <Link to="/signup" className="text-[#0030AB]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full border-solid border-[2px] border-[#E5E7EB] relative my-[1rem]">
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mx-auto p-[0.2rem] text-[0.6rem] bg-white rounded-full">
          OR
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-[1rem]">
        <Button
          className={
            "bg-[#1D9BF0] relative text-[0.8rem] px-[0.5rem] text-white w-full"
          }
          onClick={twitterLogin}
        >
          {auth?.isLoading === statusActions.twitterauth.loading && (
            <ButtonOverlay>
              <Spinner />
            </ButtonOverlay>
          )}
          <div className="relative">
            <TfiTwitter className="absolute left-[1%] top-[50%] translate-y-[-50%]" />
            <span>Log In with Twitter</span>
          </div>
        </Button>
        <Button
          className={
            "bg-[#E94235] relative text-[0.8rem] px-[0.5rem] text-white w-full"
          }
          onClick={googleLogin}
        >
          {auth?.isLoading === statusActions.googleauth.loading && (
            <ButtonOverlay>
              <Spinner />
            </ButtonOverlay>
          )}
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
