import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import "../style/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="h1Text">OPPS!</h1>
      <h1>
        <strong>404 </strong>- PAGE NOT FOUND
      </h1>
      <h3 className="paragraph">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </h3>
      <Button
        variant="contained"
        color="primary"
        className="mt-3"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home page
      </Button>
    </>
  );
};

export default NotFound;
