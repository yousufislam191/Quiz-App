import React from "react";
import style from "../style/Home.module.css";
import { Box, Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userSchema = yup.object({
    username: yup
      .string()
      .required("You must enter a username")
      .min(2, "Mininum 2 characters")
      .max(30, "Maximum 30 characters"),
    // .test(
    //   "username",
    //   "This username has already been taken",
    //   function (username) {
    //     return checkAvailabilityUsername(username);
    //   }
    // )
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // .test(
    //   "username",
    //   "This username has already been taken", // <- key, message
    //   function (value) {
    //     return new Promise((resolve, reject) => {
    //       axios
    //         .get(`http://localhost:8003/api/u/user/${value}/available`)
    //         .then((res) => {
    //           resolve(true);
    //         })
    //         .catch((error) => {
    //           if (
    //             error.response.data.content ===
    //             "The email has already been taken."
    //           ) {
    //             resolve(false);
    //           }
    //         });
    //     });
    //   }
    // ),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: async (values, helpers) => {
      console.log(values);
      navigate("/quiz");
    },
    validationSchema: userSchema,
  });

  return (
    <div className={style.area}>
      <div className={style.card}>
        <h1 className="text-center mb-3">Quiz Application</h1>
        <ol>
          <li>You will be asked 10 questions one after another.</li>
          <li>10 points is awarded for the correct answer.</li>
          <li>
            Each question has three options. You can choose only one options.
          </li>
          <li>You can review and change answers before the quiz finish.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>
        <Box />
        <div className="text-center">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="outlined-basic"
              label="username"
              name="username"
              variant="outlined"
              size="small"
              autoComplete="on"
              className={style.textField}
              error={formik.errors.username}
              onChange={formik.handleChange}
              helperText={formik.errors.username}
            />
            <Box />
            <Button
              variant="contained"
              color="primary"
              className="mt-3"
              type="submit"
            >
              Start Quiz
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
