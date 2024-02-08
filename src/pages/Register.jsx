import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          name="username"
          label="Username"
          defaultValue="Test"
        />
        <FormInput
          type="email"
          name="identifier"
          label="Email"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already exist!{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
