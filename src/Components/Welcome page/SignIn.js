import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const SignInComponent = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 5vh;
  form {
    margin-top: 50px 30px;
    padding: 20px;
    box-shadow: 0px 0px 5px rgba(71, 71, 71, 0.52);
    line-height: 60px;
    border-radius: 5px;
  }
  .header-part {
    line-height: 30px;
    padding-bottom: 20px;

    h1 {
      font-size: 30px;
    }
    p {
      font-weight: normal;
      font-size: small;
    }
  }
`;

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <SignInComponent>
      <form onSubmit={formik.handleSubmit}>
        <div className="header-part">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </SignInComponent>
  );
};

export default SignIn;
