import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { CustomFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await CustomFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged successfully!");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your crédentials";
      toast.error(errorMessage);
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginASaGuest = async (e) => {
    e.preventDefault();
    try {
      const response = await CustomFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("successfully!");
      console.log("test debut");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user error! please try again.");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput type="email" name="identifier" label="Email" />
        <FormInput type="password" name="password" label="Password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block" onClick={loginASaGuest}>
          guest user
        </button>
        <p className="text-center">
          Not a member yert?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
