import React from "react";
import style from "../style/Quiz.module.css";
import { Box, Button } from "@material-ui/core";
import Question from "./Question";

const Quiz = () => {
  return (
    <div className={style.area}>
      <div className={style.card}>
        <h1 className="text-center mb-5">Quiz Application</h1>
        <Question />
        <Box />
        <div className="text-center d-flex justify-content-between">
          <Button variant="outlined" color="primary" className="mt-3">
            previous
          </Button>
          <Button variant="outlined" color="secondary" className="mt-3">
            next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
