import bg from "../../assets/registerbg.jpg";
import Form from "./components/Form";
import AuthLayout from "../../global/layout/AuthLayout";
const Register = () => {
  return (
    <AuthLayout bgimg={bg}>
      <Form />
    </AuthLayout>
  );
};

export default Register;
