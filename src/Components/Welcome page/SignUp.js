import React from "react";
import LinkedIn from "../../image/linkedin.png";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

// styled component
const ImageComponent = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const SignUpHeader = styled.div`
  padding-bottom: 20px;
  text-align: center;
  font-size: 35px;
  font-weight: normal;
  padding-top: 40px;
`;
const FormValidation = styled.div`
  padding: 0px 100px;

  form {
    line-height: 50px;
  }
    @media screen and (min-width: 600px) {
      display: flex;
      padding: 0;
      display: flex;
      justify-content: center;
    }
  
`;
// styled components end

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

const SignUp = () => {
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
    <div className="signup-component">
      <ImageComponent>
        <img src={LinkedIn} alt="linkedin" height="40px" width="auto" />
      </ImageComponent>
      <SignUpHeader>
        Make the most of your professional life
        
      </SignUpHeader>
      <FormValidation>
        <form onSubmit={formik.handleSubmit}>
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
          <Button color="none" variant="contained" fullWidth type="submit">
            join with google
          </Button>
        </form>
      </FormValidation>
    </div>
  );
};

export default SignUp;
