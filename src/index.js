import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import FormTextField from "./FormTextField";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
});

const WithMaterialUI = () => {
  const [email] = React.useState("utkumukan@gmail.com");

  const handleChange = (setFieldValue, e) => {
    setFieldValue("email", e.target.value);
    console.log(e.target.value);
  };

  return (
    <Formik
      initialValues={{ email }}
      validationSchema={validationSchema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({ values, setFieldValue }) => (
        <>
          <Form>
            <FormTextField
              name="email"
              label="Email"
              onChange={(e) => handleChange(setFieldValue, e)}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));
