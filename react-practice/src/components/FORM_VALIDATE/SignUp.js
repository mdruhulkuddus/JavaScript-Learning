import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";

// yop for runtime validation
import { object, string, number, date, InferType } from "yup";

// name, email, password
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: object({
      name: string().min(3, "name must have 3 character").required(),
      email: string().email().required(),
      password: string().min(6, "password must have 6 character").required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

//   console.error(formik.errors);

const renderNameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );
const renderEmailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );
const renderPasswordError = formik.touched.password &&  formik.errors.password && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );



  return (
    <Card className="p-5 m-5">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="write your name"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {renderNameError}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="write your email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {renderEmailError}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              
            />
            {renderPasswordError}
          </Col>
        </Form.Group>
        <Button type="submit">Sign up</Button>
      </Form>
    </Card>
  );
};

export default SignUp;
