import { Box, Button, Card } from "@material-ui/core";
import React from "react";
import style from "../style/Result.module.css";
import { useNavigate } from "react-router-dom";
import ResultTable from "./ResultTable";

const Result = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center mb-5">Quiz Application</h1>
      <Card className={style.card}>
        <div className="d-flex justify-content-between p-3">
          <h6>Usrname</h6>
          <h6>Mark</h6>
        </div>
        <div className="d-flex justify-content-between p-3">
          <h6>Total Quiz Point :</h6>
          <h6>50</h6>
        </div>
        <div className="d-flex justify-content-between p-3">
          <h6>Total Question :</h6>
          <h6>50</h6>
        </div>
        <div className="d-flex justify-content-between p-3">
          <h6>Total Attempts :</h6>
          <h6>50</h6>
        </div>
        <div className="d-flex justify-content-between p-3">
          <h6>Total Earn Points :</h6>
          <h6>50</h6>
        </div>
        <div className="d-flex justify-content-between p-3">
          <h6>Quiz Result :</h6>
          <h6>passed</h6>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="mt-3 mb-3 ms-5"
          onClick={() => navigate("/")}
        >
          given Again quiz
        </Button>
      </Card>
      <ResultTable />
    </>
  );
};

export default Result;
