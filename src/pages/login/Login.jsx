import bg from "../../assets/loginbg.jpg";
import Form from "./components/Form";
import AuthLayout from "../../global/layout/AuthLayout";
const Login = () => {
  return (
    <AuthLayout bgimg={bg}>
      <Form />
    </AuthLayout>
  );
};

export default Login;
